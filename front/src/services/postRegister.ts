import { api } from "./api";

export interface iRegister {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
}

export async function postRegister(data: iRegister): Promise<iRegister> {
  const { data: res } = await api.post<iRegister>("/users", data);

  return res;
}
