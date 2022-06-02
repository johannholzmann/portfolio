import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
    const id = req.query.id;

    //upsert update views with a specific id, or create that view record if it does noe exists
    const views = await prisma.views.upsert({
        where: { 
            id: id 
        },
        update:{
            count:{
                increment: 1,
            },
        },
        create:{
            id: id,
            count: 1,
        },
    })
    res.json(views.count);
}