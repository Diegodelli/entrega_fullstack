import { BtnForm } from "./styles";

interface iChildren {
  children: React.ReactNode;
  type: string;
}

const ButtonForm = ({ children }: iChildren) => {
  return <BtnForm type="submit">{children}</BtnForm>;
};

export default ButtonForm;
