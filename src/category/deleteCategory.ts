import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.delete('/api/categories/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || typeof id !== 'number') {
    return res.status(404).send('Route not found');
  }

  try {
    await prisma.category.delete({
      where: { id },
    });
  } catch (e) {
    throw e;
  }
  res.status(204).send();
});

export { router as deleteCategory };
