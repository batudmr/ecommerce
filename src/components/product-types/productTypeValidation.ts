import { body } from 'express-validator';

export const typeValidation = [
  body('name')
    .exists()
    .withMessage('Required fields are missing')
    .isLength({ min: 3, max: 255 })
    .withMessage('Name must be between 3 and 255 characters'),
];
