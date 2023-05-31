import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserResponse } from "../../interfaces/user.interfaces";
import { usersSchemaResponse } from "../../schemas/users.schema";

export const getUsersService = async (): Promise<IUserResponse[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find({ withDeleted: true });

  return usersSchemaResponse.parse(users);
};
