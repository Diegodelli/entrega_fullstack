import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";

export const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  user!.isActive = false;

  await userRepository.update(userId, user!);
};
