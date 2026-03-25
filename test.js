import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  console.log("Pure JS Test - Node version:", process.version);
  try {
    const user = await prisma.user.findFirst();
    console.log("Success! Found user:", user);
  } catch (err) {
    console.error("Prisma error:", err);
  } finally {
    await prisma.$disconnect();
  }
}
main();
