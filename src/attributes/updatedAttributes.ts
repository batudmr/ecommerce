import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { updatedAttributeValidation } from './validation/attributeValidation';

const router: Router = express.Router();

router.put(
  '/api/attributes/:id',
  updatedAttributeValidation,
  inputValidator,
  async (req: Request, res: Response) => {
    const { attrName, attrDesc, attrValues } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).send('Route not found');
    }

    try {
      await prisma.productAttribute.update({
        where: { id },
        data: {
          attrName,
          attrDesc,
        },
      });
    } catch (e) {
      throw e;
    }
    res.status(201).send('İşlem başarılı');
  }
);

export { router as updatedAttributes };
