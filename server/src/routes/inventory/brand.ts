import express, { Request, Response, Router, NextFunction } from 'express';
import prisma from '../../../prisma/prismaClient';

const router: Router = express.Router();

router.get(
  '/api/brands',
  async (req: Request, res: Response, next: NextFunction) => {
    const brands = await prisma.brand.findMany({}).catch((e) => {
      return next(e);
    });

    res.status(201).send(brands);
  }
);

router.post(
  '/api/brands',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    try {
      await prisma.brand.create({
        data: {
          name,
        },
      });
    } catch (e) {
      return next(e);
    }

    res.status(201).send('Başarılı');
  }
);

router.put(
  '/api/brands/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    try {
      await prisma.brand.update({
        where: { id },
        data: {
          name,
        },
      });
    } catch (e) {
      return next(e);
    }

    res.status(201).send('Başarılı');
  }
);

router.delete(
  '/api/brands/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.brand.delete({
        where: { id },
      });
    } catch (e) {
      return next(e);
    }

    res.status(204).send({});
  }
);

export { router as brandRouter };
