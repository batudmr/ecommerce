import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { categoryValidation } from './validation/categoryValidation';

const router: Router = express.Router();

router.put(
  '/api/categories/:id',
  categoryValidation,
  inputValidator,
  async (req: Request, res: Response) => {
    const { name, slug, description } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).send('Route not found');
    }

    try {
      await prisma.category.update({
        where: { id },
        data: {
          name,
          slug,
          description,
        },
      });
    } catch (e) {
      throw e;
    }
    res.status(201).send('İşlem başarılı');
  }
);

export { router as updatedCategory };
