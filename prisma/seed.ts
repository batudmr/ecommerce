import prisma from './prismaClient';
import seedData from './seed.json';

async function main() {
  const categories = await prisma.category.createMany({
    data: seedData.categories,
  });

  const brands = await prisma.brand.createMany({ data: seedData.brands });

  for (const attr of seedData.productAttrs) {
    await prisma.productAttribute.create({
      data: {
        attrName: attr.attrName,
        attrDesc: attr.attrDesc,
        attrValue: {
          createMany: {
            data: attr.attrValues.map((value) => ({
              attrValue: value.attrValue,
            })),
          },
        },
      },
    });
  }

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
