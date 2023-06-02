import { api } from "./api";

export interface iUserId {
  id: string;
}

export interface iUser {
  id: string;
  fullname: string;
  email: string;
  telephone: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export async function getProfile(): Promise<iUser> {
  const { data } = await api.get<iUser>(`/users/profile`);

  return data;
}
