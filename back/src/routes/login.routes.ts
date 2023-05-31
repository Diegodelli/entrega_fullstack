import { Router } from "express";
import { userLoginController } from "../controllers/login.controller";

const loginRouter = Router();

loginRouter.post("", userLoginController);

export { loginRouter };
