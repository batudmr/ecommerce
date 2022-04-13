import express, { Request, Response, Router } from 'express';
import { activeUser } from '../../middlewares/active-user';

const router: Router = express.Router();

router.get(
  '/api/auth/active-user',
  activeUser,
  async (req: Request, res: Response) => {
    res.send({ activeUser: req.activeUser || null });
  }
);

export { router as authActiveUserRouter };
