import { body } from 'express-validator';

export const brandValidation = [
  body('name')
    .exists()
    .withMessage('Required fields are missing')
    .isLength({ min: 3, max: 255 })
    .withMessage('Name must be between 3 and 255 characters'),
  body('abbrev')
    .toUpperCase()
    .isLength({ min: 3, max: 3 })
    .withMessage('Abbreviation must be 3 characters'),
];
