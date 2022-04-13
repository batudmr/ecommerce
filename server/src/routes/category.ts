import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.get('/api/categories', async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany({}).catch((e) => {
    throw e;
  });

  res.status(201).send(categories);
});

router.post('/api/categories', async (req: Request, res: Response) => {
  const { name, slug, is_active } = req.body;
  try {
    await prisma.category.create({
      data: {
        name,
        slug,
        is_active,
      },
    });
  } catch (e) {
    throw e;
  }

  res.status(201).send('Başarılı');
});

router.put('/api/categories/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, slug, is_active } = req.body;
  try {
    await prisma.category.update({
      where: { id },
      data: {
        name,
        slug,
        is_active,
      },
    });
  } catch (e) {
    throw e;
  }

  res.status(201).send('Başarılı');
});

export { router as categoryRouter };
