import express from 'express';

import { newBrand } from './newBrand';
import { allBrands } from './allBrands';
import { updatedBrand } from './updatedBrand';
import { deleteBrand } from './deleteBrand';

const brandRoutes = express.Router();

brandRoutes.use(allBrands);
brandRoutes.use(newBrand);
brandRoutes.use(updatedBrand);
brandRoutes.use(deleteBrand);

export default brandRoutes;
