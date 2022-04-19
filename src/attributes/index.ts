import express from 'express';

import { newAttribute } from './newAttribute';
import { allAttributes } from './allAttributes';
import { deleteAttributes } from './deleteAttribute';

const attributeRoutes = express.Router();

attributeRoutes.use(newAttribute);
attributeRoutes.use(allAttributes);
attributeRoutes.use(deleteAttributes);

export default attributeRoutes;
