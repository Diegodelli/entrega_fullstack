import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import {
  IUserRequest,
  IUserResponse,
  IUserUpadateRequest,
} from "../interfaces/user.interfaces";
import { getUsersService } from "../services/users/getUsers.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { retriveUserService } from "../services/users/retriveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { AppError } from "../errors/AppError";

const createUserController = async (req: Request, res: Response) => {
  const body: IUserRequest = req.body;

  const newUser = await createUserService(body);

  return res.status(201).json(newUser);
};

const getUsersController = async (req: Request, res: Response) => {
  if (!res.locals.user.isAdm) {
    throw new AppError("Missing Admin authorization", 403);
  }

  const getUsers: IUserResponse[] = await getUsersService();

  return res.json(getUsers);
};

const retiveUserController = async (req: Request, res: Response) => {
  const userId = res.locals.user.id;

  const getUser: IUserResponse = await retriveUserService(userId);

  return res.json(getUser);
};

const upadateUserController = async (req: Request, res: Response) => {
  const body: IUserUpadateRequest = req.body;

  const updateUser = await updateUserService(body, req.params.id);

  return res.json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);

  return res.status(204).send();
};

export {
  createUserController,
  getUsersController,
  retiveUserController,
  upadateUserController,
  deleteUserController,
};
