import express from 'express';
import 'express-async-errors';

import categoryRoutes from './src/category';
import brandRouter from './src/brand';
import attributeRoutes from './src/attributes';

const app = express();

app.use(express.json());

app.use(categoryRoutes);
app.use(brandRouter);
app.use(attributeRoutes);

app.listen(3001, () => {
  console.log('Listening on 3001!');
});
