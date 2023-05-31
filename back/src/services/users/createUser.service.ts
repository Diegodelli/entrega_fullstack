import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

export const createUserService = async (
  body: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ email: body.email });

  if (findUser && findUser.isActive) {
    throw new AppError("User already exists", 409);
  }

  if (findUser && !findUser.isActive) {
    findUser.isActive = true;
    const user = userRepository.create({
      ...findUser,
      ...body,
    });

    await userRepository.save(user);

    return userSchemaResponse.parse(user);
  }

  const user = userRepository.create({
    ...body,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};
