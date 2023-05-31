import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.object({
    id: z.string(),
    fullname: z.string(),
  }),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
  user: true,
});

const contactSchamaUpadateRequest = contactSchema
  .omit({
    id: true,
  })
  .partial();

const contactSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchamaUpadateRequest,
  contactSchemaResponse,
};
