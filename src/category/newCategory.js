const newCategory = require('express').Router();
const prisma = require('../../prisma/prismaClient');
const { body, check } = require('express-validator');
const inputValidator = require('../../middlewares/input-validator');

newCategory.post(
  '/api/categories',
  check(['name', 'slug']).exists().withMessage('Required fields are missing'),
  body('name').isLength({ min: 3, max: 255 }),
  body('slug').isSlug(),
  body('description').isLength({ max: 2500 }),
  inputValidator,
  async (req, res) => {
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
    res.status(201).send({ name, slug });
  }
);

module.exports = newCategory;
