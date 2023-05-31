import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";

type IUser = z.infer<typeof userSchema>;
type IUserRequest = z.infer<typeof userSchemaRequest>;
type IUserResponse = z.infer<typeof userSchemaResponse>;
type IUserUpadateRequest = DeepPartial<IUserRequest>;

export { IUser, IUserRequest, IUserResponse, IUserUpadateRequest };
