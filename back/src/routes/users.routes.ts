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
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUserController
);

usersRoutes.get("", ensureAuthMiddleware, getUsersController);
usersRoutes.get(
  "/profile",
  ensureAuthMiddleware,
  ensureUserExistsMiddleware,
  retiveUserController
);
usersRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userSchamaUpadateRequest),
  ensureAuthMiddleware,
  ensureUserExistsMiddleware,
  ensureIsOwnerMiddleware,
  upadateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUserExistsMiddleware,
  ensureIsOwnerMiddleware,
  deleteUserController
);

export default usersRoutes;
