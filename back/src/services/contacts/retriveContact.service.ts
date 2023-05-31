import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { IContact } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

export const retriveContactService = async (
  contactId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  return contactSchema.parse(contact);
};
