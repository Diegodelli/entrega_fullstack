import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";

export const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: userId });

  findUser!.isActive = false;

  await userRepository.update(userId, findUser!);
};
