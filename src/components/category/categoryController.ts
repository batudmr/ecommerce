import { Request, Response } from 'express';
import prisma from '../../db/prismaClient';

class CategoryController {
  public async getAllCategories(req: Request, res: Response) {
    const categories = await prisma.category.findMany({}).catch((e) => {
      throw e;
    });

    res.send(categories);
  }

  public async createCategory(req: Request, res: Response) {
    const { name, slug, description, is_active } = req.body;
    await prisma.category
      .create({
        data: {
          name,
          slug,
          description,
          is_active,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(201).send('Data has been added successfully');
  }

  public async updateCategoryById(req: Request, res: Response) {
    const { name, slug, description, is_active } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.category
      .update({
        where: { id },
        data: {
          name,
          slug,
          description,
          is_active,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(200).send('Data has been updated successfully');
  }

  public async deleteCategoryById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.category
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw e;
      });

    res.status(204).send('Data has been deleted successfully');
  }

  constructor() {
    this.getAllCategories = this.getAllCategories.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategoryById = this.updateCategoryById.bind(this);
    this.deleteCategoryById = this.deleteCategoryById.bind(this);
  }
}

export default new CategoryController();
