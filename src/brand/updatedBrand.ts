import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { brandValidation } from './validation/brandValidation';

const router: Router = express.Router();

router.put(
  '/api/brands/:id',
  brandValidation,
  inputValidator,
  async (req: Request, res: Response) => {
    const { name, abbrev } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).send('Route not found');
    }

    try {
      await prisma.brand.update({
        where: { id },
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

export { router as updatedBrand };
