import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  req.session = null;
  res.status(200).send({});
});

export { router as authSignOutRouter };
