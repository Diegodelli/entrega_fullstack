import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { Contacts } from "../entities/contacts.entities";

export const ensureContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contactId = req.params.id;

  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
