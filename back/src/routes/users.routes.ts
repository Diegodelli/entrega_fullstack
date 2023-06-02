import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  retiveUserController,
  upadateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  userSchamaUpadateRequest,
  userSchemaRequest,
} from "../schemas/users.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUserController
);

usersRoutes.get("", ensureAuthMiddleware, getUsersController);
usersRoutes.get("/profile", ensureAuthMiddleware, retiveUserController);
usersRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userSchamaUpadateRequest),
  ensureIsOwnerMiddleware,
  upadateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  deleteUserController
);

export default usersRoutes;
