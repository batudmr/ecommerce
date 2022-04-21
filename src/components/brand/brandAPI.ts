import express, { Router } from 'express';
import brandController from './brandController';
import inputValidator from '../../middlewares/input-validator';
import { brandValidation } from './brandValidation';

const brandRouter: Router = express.Router();

brandRouter
  .route('/api/brands')
  .get(brandController.getAllBrands)
  .post(brandValidation, inputValidator, brandController.createBrand);

brandRouter
  .route('/api/brands/:id')
  .delete(brandController.deleteBrandById)
  .put(brandValidation, inputValidator, brandController.updateBrandById);

brandRouter.all('/api/brands/:id/*', (req, res) => {
  res.status(404).send('Not Found');
});

export default brandRouter;
