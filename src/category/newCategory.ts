import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { categoryValidation } from './validation/categoryValidation';

const router: Router = express.Router();

router.post(
  '/api/categories',
  categoryValidation,
  inputValidator,
  async (req: Request, res: Response) => {
    const { name, slug, description } = req.body;
    try {
      await prisma.category.create({
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

export { router as newCategory };
