import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login.interface";
import { userLoginService } from "../services/login/userLogin.service";

export const userLoginController = async (req: Request, res: Response) => {
  const body: ILoginRequest = req.body;
  const token = await userLoginService(body);

  return res.json({ token });
};
