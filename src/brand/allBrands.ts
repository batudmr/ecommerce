import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.get('/api/brands', async (req: Request, res: Response) => {
  const brands = await prisma.brand.findMany({});
  res.send(brands);
});

export { router as allBrands };
