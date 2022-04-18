import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.get('/api/categories', async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany({});
  res.send(categories);
});

export { router as allCategories };
