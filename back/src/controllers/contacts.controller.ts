import { Request, Response } from "express";
import {
  IContactRequest,
  IContactUpadateRequest,
} from "../interfaces/contact.interfaces";
import { createcontactService } from "../services/contacts/createContact.service";
import { retriveContactService } from "../services/contacts/retriveContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";

const createContactsController = async (req: Request, res: Response) => {
  const body: IContactRequest = req.body;
  const userId: string = res.locals.user.id;

  const contact = await createcontactService(body, userId);

  return res.status(201).json(contact);
};

const listContactsController = async (req: Request, res: Response) => {
  const userId = res.locals.user.id;

  const contacts = await listContactsService(userId);

  return res.json(contacts);
};

const retriveContactsController = async (req: Request, res: Response) => {
  const contact = await retriveContactService(req.params.id);

  return res.json(contact);
};

const updateContactsController = async (req: Request, res: Response) => {
  const body: IContactUpadateRequest = req.body;
  const contact = await updateContactService(body, req.params.id);

  return res.json(contact);
};

const deleteContactsController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);

  res.status(204).send();
};

export {
  createContactsController,
  listContactsController,
  retriveContactsController,
  updateContactsController,
  deleteContactsController,
};
