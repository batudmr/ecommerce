import { Request, Response } from 'express';
import prisma from '../../db/prismaClient';

class BrandController {
  public async getAllBrands(req: Request, res: Response) {
    const brands = await prisma.brand.findMany({}).catch((e) => {
      throw e;
    });

    res.send(brands);
  }

  public async createBrand(req: Request, res: Response) {
    const { name, abbrev } = req.body;

    await prisma.brand
      .create({
        data: {
          name,
          abbrev,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(201).send('Data has been added successfully');
  }

  public async updateBrandById(req: Request, res: Response) {
    const { name, abbrev } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.brand
      .update({
        where: { id },
        data: {
          name,
          abbrev,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(200).send('Data has been updated successfully');
  }

  public async deleteBrandById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.brand
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw e;
      });

    res.status(204).send('Data has been deleted successfully');
  }

  constructor() {
    this.getAllBrands = this.getAllBrands.bind(this);
    this.createBrand = this.createBrand.bind(this);
    this.updateBrandById = this.updateBrandById.bind(this);
    this.deleteBrandById = this.deleteBrandById.bind(this);
  }
}

export default new BrandController();
