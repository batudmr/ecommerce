import express, { Request, Response, Router, NextFunction } from 'express';
import prisma from '../../../prisma/prismaClient';

const router: Router = express.Router();

router.get(
  '/api/categories',
  async (req: Request, res: Response, next: NextFunction) => {
    const categories = await prisma.category.findMany({}).catch((e) => {
      return next(e);
    });

    res.status(201).send(categories);
  }
);

router.post(
  '/api/categories',
  async (req: Request, res: Response, next: NextFunction) => {
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
      return next(e);
    }

    res.status(201).send('Başarılı');
  }
);

router.put(
  '/api/categories/:id',
  async (req: Request, res: Response, next: NextFunction) => {
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
      return next(e);
    }

    res.status(201).send('Başarılı');
  }
);

router.delete(
  '/api/categories/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.category.delete({
        where: { id },
      });
    } catch (e) {
      return next(e);
    }

    res.status(204).send({});
  }
);

export { router as categoryRouter };
