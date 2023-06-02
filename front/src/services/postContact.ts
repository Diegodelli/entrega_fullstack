import { api } from "./api";
import { iContactId } from "./deleteContact";

export interface iContact {
  id?: iContactId;
  fullname: string;
  email: string;
  telephone: string;
}

export async function postContact(
  data: iContact | undefined
): Promise<iContact> {
  const { data: res } = await api.post<iContact>("/contact", data);

  return res;
}
