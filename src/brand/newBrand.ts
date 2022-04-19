import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { brandValidation } from './validation/brandValidation';

const router: Router = express.Router();

router.post(
  '/api/brands',
  brandValidation,
  inputValidator,
  async (req: Request, res: Response) => {
    const { name, abbrev } = req.body;
    try {
      await prisma.brand.create({
        data: {
          name,
          abbrev,
        },
      });
    } catch (e) {
      throw e;
    }
    res.status(201).send('İşlem başarılı');
  }
);

export { router as newBrand };
