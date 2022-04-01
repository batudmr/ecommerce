import { body } from 'express-validator';

export const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password')
    .isString()
    .isLength({ min: 8 })
    .not()
    .isLowercase()
    .not()
    .isUppercase()
    .not()
    .isNumeric()
    .not()
    .isAlpha(),
  body('firstName').isString().isLength({ max: 50 }),
  body('lastName').isString().isLength({ max: 50 }),
  body('phoneNum').isString().isLength({ min: 10, max: 10 }),
];
