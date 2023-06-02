import { Link } from "react-router-dom";
import { ContainerModalLoggedIn } from "./styles";
import { createPortal } from "react-dom";

export const ModalLoggedIn = () => {
  return createPortal(
    <ContainerModalLoggedIn>
      <div className="content__modal">
        <div className="title__modal">
          <h4 className="title__Modal">Você não está logado!</h4>
        </div>

        <Link className="link" to={"/"}>
          Fazer o login!
        </Link>
      </div>
    </ContainerModalLoggedIn>,
    document.body
  );
};
