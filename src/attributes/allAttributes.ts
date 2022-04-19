import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';

const router: Router = express.Router();

router.get('/api/product-attrs', async (req: Request, res: Response) => {
  const attributes = await prisma.productAttribute.findMany({
    include: {
      attrValue: true,
    },
  });
  res.send(attributes);
});

export { router as allAttributes };
