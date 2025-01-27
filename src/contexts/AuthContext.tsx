import {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

import { AuthenticationGateway } from "../gateways/AuthenticationGateway";
import { httpClientFactory } from "../adapters/AxiosHttpClientAdapter";
import { User } from "../types/User";

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface AuthProviderProps {
  children: JSX.Element;
}

// Cria tipagem para o contexto de autenticação das rotas
// Dentro deste contexto será possível utilizar a propriedade "user" e as funções "Login" e "signout"
interface AuthContextData {
  user: User | null;
  token: string;
  register: (props: RegisterProps) => Promise<any>;
  login: (props: LoginProps) => Promise<any>;
  logout: () => Promise<any>;
}

const gateway = new AuthenticationGateway(httpClientFactory());

const AuthContext = createContext<AuthContextData>(null!);

// No contexto de autenticação, AuthProvider é responsável pela lógica das funções "Login" e "signout"
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user] = useState<User | null>(() => {
    const value = localStorage.getItem("user");

    if (!!value) {
      return JSON.parse(value);
    }

    return null;
  });
  const [token] = useState<string>(() => {
    return localStorage.getItem("token") || "";
  });

  // Gera um token de acesso ao fornecer "email" e "password"
  const register = useCallback(async (props: RegisterProps) => {
    try {
      const response = await gateway.register({ body: props });

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  // Gera um token de acesso ao fornecer "email" e "password"
  const login = useCallback(async (props: LoginProps) => {
    try {
      const response = await gateway.login({ body: props });

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  // Destrói a sessão
  const logout = useCallback(async () => {
    try {
      const response = await gateway.logout();

      localStorage.clear();

      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  const value = useMemo(() => {
    return { user, token, register, login, logout };
  }, []);

  // Retorna o elemento JSX do AuthProvider dentro do contexto de autenticação
  // Isso permite que o AuthProvider seja utilizado com elemento do HTML
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within as AuthProvider");
  }

  return context;
};

export { useAuth, AuthProvider };
