import express from 'express';

import { newAttribute } from './newAttribute';
import { allAttributes } from './allAttributes';
import { deleteAttributes } from './deleteAttribute';
import { updatedAttributes } from './updatedAttributes';

const attributeRoutes = express.Router();

attributeRoutes.use(newAttribute);
attributeRoutes.use(allAttributes);
attributeRoutes.use(deleteAttributes);
attributeRoutes.use(updatedAttributes);

export default attributeRoutes;
