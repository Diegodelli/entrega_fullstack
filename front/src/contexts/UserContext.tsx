/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { iRegister, postRegister } from "../services/postRegister";
import { iUser } from "../services/getProfile";
import { LoginData } from "../pages/Login/validator";

interface iUserProviderProps {
  children: ReactNode;
}

interface iUserContext {
  onSubmit(data: LoginData): Promise<void>;
  onSubmitRegister(data: iRegister): Promise<void>;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@contacts:token");

    if (!token) {
      setLoading(false);

      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;
    setLoading(true);
  });

  async function onSubmit(data: LoginData): Promise<void> {
    try {
      const res = await api.post("/login", data);

      const { token } = res.data;

      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@contacts:token", token);
      navigate("/dashboard", { replace: true });
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
      setLoading(true);
    }
  }

  async function onSubmitRegister(data: iRegister): Promise<void> {
    try {
      await postRegister(data);
      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/", { replace: true });
    } catch (err) {
      toast.error("Ops! algo deu errado.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        onSubmit,
        onSubmitRegister,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
