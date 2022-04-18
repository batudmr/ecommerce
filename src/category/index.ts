import express from 'express';

import { newCategory } from './newCategory';
import { allCategories } from './allCategories';
import { updatedCategory } from './updatedCategory';
import { deleteCategory } from './deleteCategory';

const categoryRouter = express.Router();

categoryRouter.use(allCategories);
categoryRouter.use(newCategory);
categoryRouter.use(updatedCategory);
categoryRouter.use(deleteCategory);

export default categoryRouter;
