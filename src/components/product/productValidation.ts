import { body } from 'express-validator';

export const productValidation = [
  body(['name', 'slug', 'categoryId', 'brandId'])
    .exists()
    .withMessage('Required fields are missing'),
  body('name')
    .isLength({ min: 3, max: 255 })
    .withMessage('Name must be between 3 and 255 characters'),
  body('slug').isSlug().withMessage('The value must be a slug'),
  body('description')
    .isLength({ max: 600 })
    .withMessage('Description must not be over 600 characters'),
  body(['categoryId', 'brandId'])
    .isInt()
    .withMessage('Id field(s) must have an integer value'),
  body('is_active')
    .if(body('is_active').exists())
    .isBoolean()
    .withMessage('Active field must have a boolean value'),
];
