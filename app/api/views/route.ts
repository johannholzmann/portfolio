export const dynamic = 'force-dynamic';

import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";
import { differenceInHours } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        if (!isSameOriginRequest(request)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const prisma = new PrismaClient();
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
        const encryptedIp = getEncryptedIP(ip ?? "127.0.0.1");

        const lastUserView = await prisma.views.findFirst({
            where: {
                ip: encryptedIp
            }
        });

        let createView = true;
        if (lastUserView) {
            const lastUserViewDate = new Date(lastUserView.lastVisit);
            const currentDate = new Date();
            const hours = differenceInHours(currentDate, lastUserViewDate)
            if (hours < 1)
                createView = false;
        }

        if (createView) {
            await prisma.views.upsert({
                where: {
                    ip: encryptedIp
                },
                create: {
                    ip: encryptedIp,
                    views: 1
                },
                update: {
                    views: {
                        increment: 1
                    },
                    lastVisit: new Date()
                }
            })
        }
        else {
            await prisma.views.update({
                where: {
                    ip: encryptedIp
                },
                data: {
                    lastVisit: new Date()
                }
            })
        }

        const views = await prisma.views.aggregate({
            _sum: {
                views: true
            }
        });
        const res = views._sum.views;
        return NextResponse.json({ views: res })
    }
    catch (error) {
        console.log(error);
    }
    return NextResponse.json({ error: 'Error' }, { status: 404 })
}

function getEncryptedIP(ip: string) {
    const hash = createHash('sha256');
    hash.update(ip);
    return hash.digest('hex');
}

function isSameOriginRequest(request: NextRequest) {
    const requestOrigin = request.nextUrl.origin;
    const originHeader = request.headers.get("origin");
    const refererHeader = request.headers.get("referer");

    if (originHeader) {
        return originHeader === requestOrigin;
    }

    if (refererHeader) {
        try {
            const refererOrigin = new URL(refererHeader).origin;
            return refererOrigin === requestOrigin;
        } catch {
            return false;
        }
    }

    return false;
}
