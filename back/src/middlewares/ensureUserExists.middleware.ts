import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";

export const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const userId = req.params.id;

  const user = userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};
