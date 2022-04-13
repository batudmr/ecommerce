import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { validateUser } from '../../validation/user';
import prisma from '../../../prisma/prismaClient';
import { Password } from '../../services/password';

const router: Router = express.Router();

router.post(
  '/api/auth/signup',
  validateUser,
  async (req: Request, res: Response) => {
    const { email, password, phoneNum, firstName, lastName } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashedPassword = await Password.toHash(password);

    try {
      await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          phoneNum,
          firstName,
          lastName,
        },
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send('Hesap oluştururken hata oluştu');
    }

    const userJwt = jwt.sign({ email: email }, process.env.JWT_KEY!);

    req.session = {
      jwt: userJwt,
    };

    res.status(201).send('Başarılı');
  }
);

export { router as authSignUpRouter };
