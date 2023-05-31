import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";

export const deleteContactService = async (
  contactId: string
): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const findContact = await contactRepository.findOneBy({ id: contactId });

  findContact!.isActive = false;

  await contactRepository.update(contactId, findContact!);
};
