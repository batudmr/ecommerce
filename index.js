const express = require('express');
require('express-async-errors');
const app = express();

const categoryRoutes = require('./src/category/index');

app.use(express.json());

app.use(categoryRoutes);

app.listen(3001, () => {
  console.log('Listening on 3001!');
});
