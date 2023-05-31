import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entities";

export const ensureIsOwnerContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const contactId = req.params.id;
  const userId = res.locals.user.id;
  const isAdm = res.locals.user.isAdm;

  const contact = await contactsRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!isAdm && userId !== contact?.user.id) {
    throw new AppError("Missing Admin authorization", 403);
  }

  return next();
};
