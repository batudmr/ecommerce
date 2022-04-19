import { PrismaClient } from '@prisma/client';
import seedData from './seed.json' assert { type: 'JSON' };

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: seedData.categories,
  });

  const brands = await prisma.brand.createMany({ data: seedData.brands });

  console.log({ categories, brands });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
