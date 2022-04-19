import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { attributeValidation } from './validation/attributeValidation';

const router: Router = express.Router();

router.post(
  '/api/product-attrs',
  attributeValidation,
  inputValidator,
  async (req: Request, res: Response) => {
    const { attrName, attrDesc, attrValues } = req.body;
    try {
      await prisma.productAttribute.create({
        data: {
          attrName,
          attrDesc,
          attrValue: {
            createMany: {
              data: attrValues,
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
    res.status(201).send('İşlem başarılı');
  }
);

export { router as newAttribute };
