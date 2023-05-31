import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { IContactRequest, IContact } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

export const createcontactService = async (
  body: IContactRequest,
  userId: string
): Promise<IContact> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);
  const findContact = await contactsRepository.findOneBy({ email: body.email });

  if (findContact && findContact.isActive) {
    throw new AppError("Contact already exists", 409);
  }

  if (findContact && !findContact.isActive) {
    findContact.isActive = true;
    const contact = userRepository.create({
      ...findContact,
      ...body,
    });

    await contactsRepository.save(contact);

    return contactSchema.parse(contact);
  }

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contacts = contactsRepository.create({
    ...body,
    user,
  });

  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};
