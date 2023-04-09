import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
    let output = null;
    try {
        const id = req?.query?.id;
        if (!id)
            throw new Error("ID null");

        //upsert update views with a specific id, or create that view record if it does noe exists
        const views = await prisma.views.upsert({
            where: {
                id: id
            },
            update: {
                count: {
                    increment: 1,
                },
            },
            create: {
                id: id,
                count: 1,
            },
        })
        const ret = views?.count;
        if (!ret)
            throw new Error("Not exists record");

        output = ret;
    }
    catch (error) {
        // console.log("Error: ", error);
        return res.status(404).send({ error: "Ocurrio un error" });
    }
    return res.json(output);
}