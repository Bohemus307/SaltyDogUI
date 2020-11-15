import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Retrieve all published posts
  const allPhValues = await prisma.values.findMany({
    where: { correlateid: "BJenjRROw" },
  })
  
  const allECValues = await prisma.values.findMany({
    where: { correlateid: "SJV0-wdOM" },
  })

  const allECValues = await prisma.values.findMany({
    where: { correlateid: "SJV0-wdOM" },
  })

  
}


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })