import express from 'express';
import 'express-async-errors';

import categoryRoutes from './src/category/index';

const app = express();

app.use(express.json());

app.use(categoryRoutes);

app.listen(3001, () => {
  console.log('Listening on 3001!');
});
