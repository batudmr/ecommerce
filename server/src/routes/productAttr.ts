import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.get('/api/product-attr', async (req: Request, res: Response) => {
  const productAttr = await prisma.productAttribute
    .findMany({
      include: {
        productAttrValue: true,
      },
    })
    .catch((e) => {
      throw e;
    });

  res.status(200).send(productAttr);
});

router.post('/api/product-attr', async (req: Request, res: Response) => {
  const { attrName, attrDesc, attrValues } = req.body;
  try {
    await prisma.productAttribute.create({
      data: {
        name: attrName,
        description: attrDesc,
        productAttrValue: {
          createMany: {
            data: attrValues.map((values: string) => {
              return { attributeValue: values };
            }),
          },
        },
      },
    });
  } catch (e) {
    throw e;
  }

  res.status(201).send('Başarılı');
});

router.delete('/api/product-attr/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    await prisma.productAttribute.delete({ where: { id } });
  } catch (e) {
    throw e;
  }

  res.status(204).send('Basarili');
});

export { router as productAttrRouter };
