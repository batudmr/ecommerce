import express, { Request, Response, Router } from 'express';
import prisma from '../../../prisma/prismaClient';
import { Password } from '../../services/password';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser?.email !== email) {
    return res.status(400).send('Geçersiz e-posta veya şifre girdiniz');
  }

  const passwordMatch = await Password.compare(
    existingUser!.password,
    password
  );

  if (!passwordMatch) {
    return res.status(400).send('Geçersiz e-posta veya şifre girdiniz');
  }

  res.status(200).send('Başarılı');
});

export { router as authSignInRouter };
