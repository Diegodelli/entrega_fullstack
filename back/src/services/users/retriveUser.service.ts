import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

export const retriveUserService = async (
  userId: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  return userSchemaResponse.parse(user);
};
