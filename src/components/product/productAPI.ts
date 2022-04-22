import express, { Router } from 'express';
import productController from './productController';
import inputValidator from '../../middlewares/input-validator';
import { productValidation } from './productValidation';

const productRouter: Router = express.Router();

productRouter
  .route('/api/products')
  .get(productController.getAllProducts)
  .post(productValidation, inputValidator, productController.createProduct);

productRouter
  .route('/api/products/:id')
  .delete(productController.deleteProductById)
  .put(productValidation, inputValidator, productController.updateProductById);

productRouter.all('/api/product/:id/*', (req, res) => {
  res.status(404).send('Not Found');
});

export default productRouter;
