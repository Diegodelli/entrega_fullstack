import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatória")
    .email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type LoginData = z.infer<typeof schema>;
