import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import { handleAppError } from "./errors/handleAppError";
import { loginRouter } from "./routes/login.routes";
import contactsRoutes from "./routes/contacts.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRouter);
app.use("/contact", contactsRoutes);

app.use(handleAppError);

export default app;
