import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  email: z.string().email(),
  password: z.string(),
  telephone: z.string(),
  isAdm: z.boolean().default(false),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchamaUpadateRequest = userSchema
  .omit({
    id: true,
  })
  .partial();

const usersSchemaResponse = z.array(userSchemaResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchamaUpadateRequest,
  usersSchemaResponse,
};
