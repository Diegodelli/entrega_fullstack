import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import {
  IContact,
  IContactUpadateRequest,
} from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

export const updateContactService = async (
  body: IContactUpadateRequest,
  contactId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOneBy({ id: contactId });

  const newContact = contactRepository.create({
    ...contact,
    ...body,
  });
  await contactRepository.save(newContact);

  return contactSchema.parse(newContact);
};
