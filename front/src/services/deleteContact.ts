import { api } from "./api";

export interface iContactId {
  id: string;
}

export async function deleteContact(id: iContactId): Promise<iContactId> {
  const { data } = await api.delete<iContactId>(`/contact/${id}`);

  return data;
}
