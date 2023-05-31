import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  retriveContactsController,
  updateContactsController,
} from "../controllers/contacts.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchamaUpadateRequest,
  contactSchemaRequest,
} from "../schemas/contact.schema";
import { ensureContactExistsMiddleware } from "../middlewares/ensureContactExists.middleware";
import { ensureIsOwnerContactMiddleware } from "../middlewares/ensureIsOwnerContacts.middleware";

const contactsRoutes = Router();

contactsRoutes.use(ensureAuthMiddleware);

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  createContactsController
);
contactsRoutes.get("", listContactsController);
contactsRoutes.get(
  "/:id",
  ensureContactExistsMiddleware,
  ensureIsOwnerContactMiddleware,
  retriveContactsController
);
contactsRoutes.patch(
  "/:id",
  ensureContactExistsMiddleware,
  ensureIsOwnerContactMiddleware,
  ensureDataIsValidMiddleware(contactSchamaUpadateRequest),
  updateContactsController
);
contactsRoutes.delete(
  "/:id",
  ensureContactExistsMiddleware,
  ensureIsOwnerContactMiddleware,
  deleteContactsController
);

export default contactsRoutes;
