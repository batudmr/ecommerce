import { body } from 'express-validator';

export const attributeValidation = [
  body('attrName')
    .exists()
    .withMessage('Please provide an attribute name')
    .isLength({ max: 255 })
    .withMessage('Attribute name must be under 255 characters'),
  body('attrDesc').isLength({ max: 600 }),
  body('attrValues')
    .not()
    .isEmpty()
    .withMessage('The attribute must have at least one value'),
  body('attrValues.*.attrValue')
    .exists()
    .withMessage('The attribute must have at least one value'),
];

export const updatedAttributeValidation = [
  body('attrName')
    .exists()
    .withMessage('Please provide an attribute name')
    .isLength({ max: 255 })
    .withMessage('Attribute name must be under 255 characters'),
  body('attrDesc').isLength({ max: 600 }),
  body('attrValues')
    .not()
    .isEmpty()
    .withMessage('The attribute must have at least one value'),
];
