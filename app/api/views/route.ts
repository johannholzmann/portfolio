export const dynamic = 'force-dynamic';

import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";
import { differenceInHours } from "date-fns";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const headersList = headers();
        const ip = headersList.get("x-forwarded-for");
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

        if (createView)
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
                    }
                }
            })

        const views = await prisma.views.aggregate({
            _sum: {
                views: true
            }
        });
        const res = views._sum.views;
        console.log("todo ok");
        return NextResponse.json({ views: res })
    }
    catch (error) {
        console.log("error");
        console.log(error);
    }
    return NextResponse.json({ error: 'Error' }, { status: 404 })
}

function getEncryptedIP(ip: string) {
    const hash = createHash('sha256');
    hash.update(ip);
    return hash.digest('hex');
}