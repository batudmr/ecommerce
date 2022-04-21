import express from 'express';
import 'express-async-errors';
import attributeRouter from './src/components/attribute/attributeAPI';
import brandRouter from './src/components/brand/brandAPI';
import categoryRouter from './src/components/category/categoryAPI';

const app = express();

app.use(express.json());

app.use(brandRouter);
app.use(categoryRouter);
app.use(attributeRouter);

app.all('*', async () => {
  throw Error();
});

app.listen(3001, () => {
  console.log('Listening on 3001!');
});
