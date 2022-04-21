import { body } from 'express-validator';

export const categoryValidation = [
  body(['name', 'slug']).exists().withMessage('Required fields are missing'),
  body('name')
    .isLength({ min: 3, max: 255 })
    .withMessage('Name must be between 3 and 255 characters'),
  body('slug').isSlug().withMessage('The value must be slug'),
  body('description')
    .isLength({ max: 600 })
    .withMessage('Description must not be over 600 characters'),
];
