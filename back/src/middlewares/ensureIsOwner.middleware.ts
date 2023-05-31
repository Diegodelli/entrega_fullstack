import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const ensureIsOwnerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsId = req.params.id;
  const userId = res.locals.user.id;
  const isAdm = res.locals.user.isAdm;

  if (!isAdm && userId !== paramsId) {
    throw new AppError("Missing Admin authorization", 403);
  }

  return next();
};
