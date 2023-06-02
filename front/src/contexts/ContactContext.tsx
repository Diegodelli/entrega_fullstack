import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iContact } from "../services/postContact";
import { deleteContact, iContactId } from "../services/deleteContact";
import { postContact } from "../services/postContact";

interface iContactProviderProps {
  children: React.ReactNode;
}

interface iContactContext {
  submitAddContact(data: iContact): Promise<void>;
  removeContact(id: iContactId | undefined): Promise<void>;
  loadingRemove: boolean;
  loadingAdd: boolean;
  modalContact: boolean;
  setModalContact: React.Dispatch<React.SetStateAction<boolean>>;
  contact: iContact[] | undefined;
  setContact: React.Dispatch<React.SetStateAction<iContact[] | undefined>>;
}

export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [contact, setContact] = useState<iContact[] | undefined>([]);

  async function submitAddContact(data: iContact): Promise<void> {
    try {
      setLoadingAdd(true);
      const res = await postContact(data);
      toast.success("Contato adicionado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      const newContact = [...(contact || []), res];
      setContact(newContact);

      setModalContact(false);
    } catch (err) {
      toast.error("Ops, algo deu errado. Revise os campos!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    } finally {
      setLoadingAdd(false);
    }
  }

  async function removeContact(id: iContactId): Promise<void> {
    try {
      setLoadingRemove(true);
      await deleteContact(id);
      toast.success("Contato removido!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const filterRemove = contact?.filter((element) => element.id !== id);
      setContact(filterRemove);
    } catch (err) {
      toast.error("Ops, algo deu errado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    } finally {
      setLoadingRemove(false);
    }
  }

  return (
    <ContactContext.Provider
      value={{
        loadingRemove,
        submitAddContact,
        modalContact,
        setModalContact,
        removeContact,
        loadingAdd,
        contact,
        setContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
