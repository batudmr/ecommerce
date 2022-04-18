const categoryRouter = require('express').Router();
const newCategory = require('./newCategory');
const allCategories = require('./allCategories');

categoryRouter.use(allCategories);
categoryRouter.use(newCategory);

module.exports = categoryRouter;
