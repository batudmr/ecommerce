import express, { NextFunction, Request, Response, Router } from 'express';
import prisma from '../../../prisma/prismaClient';

const router: Router = express.Router();

router.get(
  '/api/product-types',
  async (req: Request, res: Response, next: NextFunction) => {
    const productTypes = await prisma.productType
      .findMany({
        include: {
          productAttr: true,
        },
      })
      .catch((e) => {
        return next(e);
      });

    res.status(201).send(productTypes);
  }
);

router.post(
  '/api/product-types',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, attributeIds } = req.body;
    try {
      await prisma.productType.create({
        data: {
          name,
          productAttr: {
            connect: attributeIds.map((attrId: number) => {
              return { id: attrId };
            }),
          },
        },
      });
    } catch (e) {
      return next(e);
    }

    res.status(201).send('Başarılı');
  }
);

router.put(
  '/api/product-types/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const { name, attributeIds } = req.body;
    try {
      await prisma.productType.update({
        where: { id },
        data: {
          name,
          productAttr: {
            connect: attributeIds.map((attrId: number) => {
              return { id: attrId };
            }),
          },
        },
      });
    } catch (e) {
      throw e;
    }

    res.status(200).send('Başarılı');
  }
);

router.delete(
  '/api/product-types/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.productType.delete({
        where: { id },
      });
    } catch (e) {
      return next(e);
    }

    res.status(204).send({});
  }
);

export { router as productTypeRouter };
