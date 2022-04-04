import express, { Request, Response, Router } from 'express';
import prisma from '../../../prisma/prismaClient';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { name, slug, description, category, is_active } = req.body;
  try {
    await prisma.product.create({
      data: {
        name,
        slug,
        description,
        is_active,
        category: {
          connect: {
            id: category,
          },
        },
      },
    });
  } catch (e) {
    throw e;
  }

  res.status(201).send('Başarılı');
});

export { router as productCreateRouter };
