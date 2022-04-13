import { Prisma } from '@prisma/client';

import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    console.log(err.code);
    if (err.code === 'P2025') {
      return res.status(400).send('Record not found');
    } else {
      return res.status(500).send('Unhandled Error');
    }
  }

  console.log(err);

  return res.status(500).send('Unhandled Error!');
};
