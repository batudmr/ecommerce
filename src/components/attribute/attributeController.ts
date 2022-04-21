import { Request, Response } from 'express';
import prisma from '../../db/prismaClient';

class AttributeController {
  public async getAllAttributes(req: Request, res: Response) {
    const attrs = await prisma.productAttribute
      .findMany({
        include: {
          attrValue: true,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.send(attrs);
  }

  public async createAttribute(req: Request, res: Response) {
    const { attrName, attrDesc, attrValues } = req.body;

    await prisma.productAttribute
      .create({
        data: {
          attrName,
          attrDesc,
          attrValue: {
            createMany: {
              data: attrValues,
            },
          },
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(201).send('Data has been added successfully');
  }

  public async updateAttributeById(req: Request, res: Response) {
    const { attrName, attrDesc } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(404).send('Route not found');
    }

    await prisma.productAttribute
      .update({
        where: { id },
        data: {
          attrName,
          attrDesc,
        },
      })
      .catch((e) => {
        throw e;
      });

    res.status(200).send('Data has been updated successfully');
  }

  public async deleteAttributeById(req: Request, res: Response) {
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
    this.getAllAttributes = this.getAllAttributes.bind(this);
    this.createAttribute = this.createAttribute.bind(this);
    this.updateAttributeById = this.updateAttributeById.bind(this);
    this.deleteAttributeById = this.deleteAttributeById.bind(this);
  }
}

export default new AttributeController();
