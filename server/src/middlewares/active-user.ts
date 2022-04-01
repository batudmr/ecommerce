import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      activeUser?: UserPayload;
    }
  }
}

export const activeUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.activeUser = payload;
  } catch (err) {}
  next();
};
