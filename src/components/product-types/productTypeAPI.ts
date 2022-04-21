import express, { Router } from 'express';
import productTypeController from './productTypeController';
import inputValidator from '../../middlewares/input-validator';
import { typeValidation } from './productTypeValidation';

const productTypeRouter: Router = express.Router();

productTypeRouter
  .route('/api/product-types')
  .get(productTypeController.getAllTypes)
  .post(typeValidation, inputValidator, productTypeController.createType);

productTypeRouter
  .route('/api/product-types/:id')
  .delete(productTypeController.deleteTypeById)
  .put(typeValidation, inputValidator, productTypeController.updateTypeById);

productTypeRouter.all('/api/product-types/:id/*', (req, res) => {
  res.status(404).send('Not Found');
});

export default productTypeRouter;
