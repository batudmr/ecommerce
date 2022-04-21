import { Request, Response } from 'express';
import prisma from '../../db/prismaClient';

class ProductTypeController {
  public async getAllTypes(req: Request, res: Response) {
    const types = await prisma.productType
      .findMany({
        include: {
          productAttrs: {
            select: {
              id: true,
              attrName: true,
            },
          },
        },
      })
      .catch((e) => {
        throw e;
      });

    res.send(types);
  }

  public async createType(req: Request, res: Response) {
    const { name, attributes } = req.body;

    await prisma.productType
      .create({
        data: {
          name,
          productAttrs: {
            connect: attributes,
          },
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(201).send('Data has been added successfully');
  }

  public async updateTypeById(req: Request, res: Response) {
    const { name, attributes } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.productType
      .update({
        where: { id },
        data: {
          name,
          productAttrs: {
            set: attributes,
          },
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(200).send('Data has been updated successfully');
  }

  public async deleteTypeById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw Error();
    }

    await prisma.productType
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw e;
      });

    res.status(204).send('Data has been deleted successfully');
  }

  constructor() {
    this.getAllTypes = this.getAllTypes.bind(this);
    this.createType = this.createType.bind(this);
    this.updateTypeById = this.updateTypeById.bind(this);
    this.deleteTypeById = this.deleteTypeById.bind(this);
  }
}

export default new ProductTypeController();
