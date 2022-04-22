import { Request, Response } from 'express';
import prisma from '../../db/prismaClient';

class ProductController {
  public async getAllProducts(req: Request, res: Response) {
    const products = await prisma.product
      .findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          brand: {
            select: {
              name: true,
            },
          },
          category: {
            select: {
              name: true,
            },
          },
        },
      })
      .catch((e) => {
        throw e;
      });

    res.send(products);
  }

  public async createProduct(req: Request, res: Response) {
    const { name, slug, description, categoryId, brandId, is_active } =
      req.body;
    await prisma.product
      .create({
        data: {
          name,
          slug,
          categoryId,
          brandId,
          description,
          is_active,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(201).send('Data has been added successfully');
  }

  public async updateProductById(req: Request, res: Response) {
    const { name, slug, description, categoryId, brandId, is_active } =
      req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.product
      .update({
        where: { id },
        data: {
          name,
          slug,
          categoryId,
          brandId,
          description,
          is_active,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(200).send('Data has been updated successfully');
  }

  public async deleteProductById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.product
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw e;
      });

    res.status(204).send('Data has been deleted successfully');
  }

  constructor() {
    this.getAllProducts = this.getAllProducts.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProductById = this.updateProductById.bind(this);
    this.deleteProductById = this.deleteProductById.bind(this);
  }
}

export default new ProductController();
