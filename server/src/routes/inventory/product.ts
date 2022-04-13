import express, { Request, Response, Router, NextFunction } from 'express';
import prisma from '../../../prisma/prismaClient';

const router: Router = express.Router();

router.get(
  '/api/products',
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await prisma.product
      .findMany({
        include: {
          productInventory: true,
        },
      })
      .catch((e) => {
        return next(e);
      });

    res.status(201).send(products);
  }
);

router.post(
  '/api/products',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, slug, description, categoryId, is_active } = req.body;

    try {
      await prisma.product.create({
        data: {
          name,
          slug,
          description,
          is_active,
          category: {
            connect: {
              id: categoryId,
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
  '/api/products/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.product.delete({ where: { id } });
    } catch (e) {
      return next(e);
    }

    res.status(201).send('Basarili');
  }
);

export { router as productRouter };
