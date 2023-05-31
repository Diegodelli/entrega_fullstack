import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { IContactResponse } from "../../interfaces/contact.interfaces";
import { contactSchemaResponse } from "../../schemas/contact.schema";

export const listContactsService = async (
  userId: string
): Promise<IContactResponse> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contacts = await contactsRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  return contactSchemaResponse.parse(contacts);
};
