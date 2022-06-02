import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
    if (req.method === 'GET')
        return await getGithubReactions(req, res);
}

async function getGithubReactions(req, res) {
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
        }
        );
        const json = await ret.json();
        const status = ret.status;
        if (status != 200)
            throw new Error("Not found");
        const reactionGroup = json?.data?.repository?.issue?.reactionGroups;
        const array = [];
        reactionGroup.map((element) => {
            array.push({
                "reaction": element.content,
                "count": element.users.totalCount,
            });
        })
        return res.status(200).json(array);
    }
    catch (error) {
        return res.status(404).send("");
    }
}
