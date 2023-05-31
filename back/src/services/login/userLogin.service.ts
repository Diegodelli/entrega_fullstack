import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { ILoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const userLoginService = async (
  body: ILoginRequest
): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: body.email });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  if (!user.isActive) {
    throw new AppError("User is inactive", 403);
  }

  const passwordMatch = await compare(body.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Incorrect Password", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "3h",
    }
  );

  return token;
};
