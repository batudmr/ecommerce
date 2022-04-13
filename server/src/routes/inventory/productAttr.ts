import express, { Request, Response, Router, NextFunction } from 'express';
import prisma from '../../../prisma/prismaClient';

const router: Router = express.Router();

router.get(
  '/api/product-attr',
  async (req: Request, res: Response, next: NextFunction) => {
    const productAttr = await prisma.productAttribute
      .findMany({
        include: {
          productAttrValue: true,
        },
      })
      .catch((e) => {
        return next(e);
      });

    res.status(200).send(productAttr);
  }
);

router.post(
  '/api/product-attr',
  async (req: Request, res: Response, next: NextFunction) => {
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
      return next(e);
    }

    res.status(201).send('Başarılı');
  }
);

router.delete(
  '/api/product-attr/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.productAttribute.delete({ where: { id } });
    } catch (e) {
      return next(e);
    }

    res.status(204).send('Basarili');
  }
);

export { router as productAttrRouter };
