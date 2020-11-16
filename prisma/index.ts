import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  const allPhValues = await prisma.values.findMany({
    where: { correlateid: "BJenjRROw" },
  })
  
}


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })