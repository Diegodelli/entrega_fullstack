import ButtonForm from "../../components/ButtonForm";
import { Container } from "./styles";
import "../../styles/text.css";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginData, schema } from "./validator";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { onSubmit } = useContext(UserContext);

  return (
    <>
      <ToastContainer />
      <Container>
        <header></header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="titleForm">Login</h3>
          <label className="textLabel" htmlFor="email">
            Email
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
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <ButtonForm type="submit">Entrar</ButtonForm>

          <span className="spanForm">Ainda não possui uma conta?</span>

          <Link className="link" to={"/register"}>
            Cadastre-se
          </Link>
        </form>
      </Container>
    </>
  );
};
