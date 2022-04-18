import express, { Request, Response, Router } from 'express';
import prisma from '../../prisma/prismaClient';
import inputValidator from '../../middlewares/input-validator';
import { body } from 'express-validator';

const router: Router = express.Router();

router.post(
  '/api/categories',
  body(['name', 'slug']).exists().withMessage('Required fields are missing'),
  body('name').isLength({ min: 3, max: 255 }),
  body('slug').isSlug(),
  body('description').isLength({ max: 2500 }),
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
