export const dynamic = 'force-dynamic' // defaults to auto

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const URL = "https://api.github.com/graphql";
        const token = process.env.GITHUB_TOKEN;
        const ret = await fetch(URL, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
                query: `query {
                repository(owner:"johannholzmann", name:"portfolio"){
                    issue(number:1) {
                        reactionGroups {
                            content
                            users(first: 0) {
                                totalCount
                            }
                        }
                    }
                }
            }`,
            }),
        });

        const json = await ret.json();
        const status = ret.status;
        if (status != 200)
            throw new Error("Not found");
        const reactionGroup = json?.data?.repository?.issue?.reactionGroups;
        const array: {
            reaction: string,
            count: number
        }[] = [];

        reactionGroup.map((element: any) => {
            array.push({
                "reaction": element.content,
                "count": element.users.totalCount,
            });
        })
        return NextResponse.json(array)
    }
    catch (error) {
    }
    return NextResponse.json({ error: 'Error' }, { status: 404 })
}
