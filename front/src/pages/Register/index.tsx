import ButtonForm from "../../components/ButtonForm";
import { ContainerRegister } from "./styles";
import "../../styles/text.css";
import "../../styles/button.css";
import { z } from "zod";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iRegister } from "../../services/postRegister";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const schema = z.object({
    fullname: z.string().nonempty("Nome é obrigatório"),
    email: z
      .string()
      .nonempty("E-mail é obrigatória")
      .email("Deve ser um email válido!"),
    password: z.string().nonempty("Senha é obrigatória"),
    telephone: z.string().nonempty("Telefone é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: zodResolver(schema),
  });

  const { onSubmitRegister } = useContext(UserContext);
  return (
    <>
      <ToastContainer />
      <ContainerRegister>
        <header>
          <Link className="buttonDefault" to={"/"}>
            Voltar
          </Link>
        </header>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <h3 className="titleForm">Register</h3>

          <label className="textLabel" htmlFor="fullname">
            Nome Completo
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Digite aqui seu nome"
            {...register("fullname")}
          />
          <p>{errors.fullname?.message}</p>

          <label className="textLabel" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label className="textLabel" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <label className="textLabel" htmlFor="telephone">
            Contato Telefônico
          </label>
          <input
            type="text"
            id="telephone"
            placeholder="Digite aqui seu telefone"
            {...register("telephone")}
          />
          <p>{errors.telephone?.message}</p>

          <ButtonForm type="submit">Cadastrar</ButtonForm>
        </form>
      </ContainerRegister>
    </>
  );
};

export default Register;
