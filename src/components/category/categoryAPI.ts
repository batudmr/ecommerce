import express, { Router, Request, Response } from 'express';
import inputValidator from '../../middlewares/input-validator';
import categoryController from './categoryController';
import { categoryValidation } from './categoryValidation';

const categoryRouter: Router = express.Router();

categoryRouter
  .route('/api/categories')
  .get(categoryController.getAllCategories)
  .post(categoryValidation, inputValidator, categoryController.createCategory);

categoryRouter
  .route('/api/categories/:slug')
  .get(categoryController.getCategoryWithProductsBySlug);

categoryRouter
  .route('/api/categories/:id')
  .put(
    categoryValidation,
    inputValidator,
    categoryController.updateCategoryById
  )
  .delete(categoryController.deleteCategoryById);

categoryRouter.all('/api/categories/:id/*', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

export default categoryRouter;
