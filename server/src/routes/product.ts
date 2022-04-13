import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.get('/api/products', async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({}).catch((e) => {
    throw e;
  });

  res.status(201).send(products);
});

router.post('/api/products', async (req: Request, res: Response) => {
  const { name, slug, description, categoryId, is_active } = req.body;

  try {
    if (categoryId) {
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
    } else {
      await prisma.product.create({
        data: {
          name,
          slug,
          description,
          is_active,
        },
      });
    }
  } catch (e) {
    throw e;
  }

  res.status(201).send('Başarılı');
});

router.delete('/api/products/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    await prisma.product.delete({ where: { id } });
  } catch (e) {
    throw e;
  }

  res.status(201).send('Basarili');
});

export { router as productRouter };
