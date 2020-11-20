import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  const weekPhValues = await prisma.values.findMany({
    where: { correlateid:{ equals: "BJenjRROw"}, 
    date: { 
      lte: new Date(), 
      gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) 
    }, 
    },
  });
  console.log(weekPhValues);
 
}


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })