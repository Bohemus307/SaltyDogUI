import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
 // query funcs go here 
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })