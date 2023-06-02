import { ContainerModal } from "./styles";
import BtnForm from "../ButtonForm";
import "../../styles/text.css";
import "../../styles/button.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { ToastContainer } from "react-toastify";
import Loading from "../Loading";
import useOutClick from "../../hooks/useOutClick";
import { iContact } from "../../services/postContact";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";

export const Modal = () => {
  const refModal = useOutClick(() => {
    setModalContact(false);
  });

  const schema = z.object({
    fullname: z.string().nonempty("Nome é obrigatório"),
    email: z
      .string()
      .nonempty("E-mail é obrigatório")
      .email("Deve ser um e-mail"),
    telephone: z.string().nonempty("Telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContact>({
    resolver: zodResolver(schema),
  });

  const { submitAddContact, setModalContact, loadingAdd } =
    useContext(ContactContext);

  const closeModal = () => {
    setModalContact(false);
  };

  return createPortal(
    <>
      <ToastContainer />

      <ContainerModal>
        <div className="content__modal" ref={refModal}>
          <div className="title__modal">
            <h4 className="title__Modal">Cadastrar Contato</h4>
            <button
              className="close__modal"
              type="button"
              onClick={() => closeModal()}
            >
              x
            </button>
          </div>
          <form onSubmit={handleSubmit(submitAddContact)}>
            {loadingAdd && <Loading />}
            <label className="textLabel" htmlFor="fullname">
              Nome
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Nome completo"
              {...register("fullname")}
            />
            <p>{errors.fullname?.message}</p>

            <label className="textLabel" htmlFor="email">
              E-mail
            </label>

            <input
              type="text"
              id="email"
              placeholder="E-mail"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <label className="textLabel" htmlFor="telephone">
              Número de Telefone
            </label>

            <input
              type="text"
              id="telephone"
              placeholder="Telefone"
              {...register("telephone")}
            />
            <p>{errors.telephone?.message}</p>

            <BtnForm type="submit">Cadastrar Contato</BtnForm>
          </form>
        </div>
      </ContainerModal>
    </>,
    document.body
  );
};
