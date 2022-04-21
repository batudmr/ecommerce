import express, { Router } from 'express';
import inputValidator from '../../middlewares/input-validator';
import categoryController from '../category/categoryController';
import attributeController from './attributeController';
import {
  attributeValidation,
  updatedAttributeValidation,
} from './attributeValidation';

const attributeRouter: Router = express.Router();

attributeRouter
  .route('/api/product-attrs')
  .get(attributeController.getAllAttributes)
  .post(attributeValidation, inputValidator, categoryController.createCategory);

attributeRouter
  .route('/api/product-attrs/:id')
  .put(
    updatedAttributeValidation,
    inputValidator,
    attributeController.updateAttributeById
  )
  .delete(attributeController.deleteAttributeById);

attributeRouter.all('/api/product-attrs/:id/*', (req, res) => {
  res.status(404).send('Not Found');
});

export default attributeRouter;
