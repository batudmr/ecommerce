const allCategories = require('express').Router();
const prisma = require('../../prisma/prismaClient');

allCategories.get('/api/categories', async (req, res) => {
  const categories = await prisma.category.findMany({});
  res.send(categories);
});

module.exports = allCategories;
