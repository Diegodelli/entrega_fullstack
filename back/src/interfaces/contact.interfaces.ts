import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../schemas/contact.schema";

type IContact = z.infer<typeof contactSchema>;
type IContactRequest = z.infer<typeof contactSchemaRequest>;
type IContactResponse = z.infer<typeof contactSchemaResponse>;
type IContactUpadateRequest = DeepPartial<IContactRequest>;

export { IContact, IContactRequest, IContactResponse, IContactUpadateRequest };
