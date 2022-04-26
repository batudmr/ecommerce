import express from 'express';
import 'express-async-errors';
import attributeRouter from './src/components/attribute/attributeAPI';
import brandRouter from './src/components/brand/brandAPI';
import categoryRouter from './src/components/category/categoryAPI';
import productTypeRouter from './src/components/product-types/productTypeAPI';
import productRouter from './src/components/product/productAPI';

const app = express();

app.use(express.json());

app.use(brandRouter);
app.use(categoryRouter);
app.use(attributeRouter);
app.use(productTypeRouter);
app.use(productRouter);

app.use('/assets', express.static('public'));

app.all('*', async (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3001, () => {
  console.log('Listening on 3001!');
});
