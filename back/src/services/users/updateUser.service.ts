import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import {
  IUserResponse,
  IUserUpadateRequest,
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

export const updateUserService = async (
  body: IUserUpadateRequest,
  userId: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const userUpadate = userRepository.create({
    ...user,
    ...body,
  });

  await userRepository.save(userUpadate);

  return userSchemaResponse.parse(userUpadate);
};
