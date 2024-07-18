import { useEffect, useState, createContext, useContext } from "react";

import { AuthenticationGateway } from "../gateways/AuthenticationGateway";

import { httpClientFactory } from "../adapters/AxiosHttpClientAdapter";

const gateway = new AuthenticationGateway(httpClientFactory());

import { User } from "../types/User";

interface SigninProps {
  email: string;
  password: string;
}

interface SignupProps {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

interface AuthProviderProps {
  children: JSX.Element;
}

// Cria tipagem para o contexto de autenticação das rotas
// Dentro deste contexto será possível utilizar a propriedade "user" e as funções "signin" e "signout"
interface AuthContextData {
  user: User | null;
  signin: (props: SigninProps) => Promise<boolean>;
  signup: (props: SignupProps) => Promise<boolean>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>(null!);

// No contexto de autenticação, AuthProvider é responsável pela lógica das funções "signin" e "signout"
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Gera um token de acesso ao fornecer "email" e "password"
  const signin = async ({ email, password }: SigninProps) => {
    const data = await gateway.login({
      body: { email, password },
    });

    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);

      return true;
    }

    return false;
  };

  // // Gera um token de acesso ao fornecer "email" e "password"
  // const signup = async ({
  //   name,
  //   email,
  //   password,
  //   confirmPass,
  // }: SignupProps) => {
  //   const data = await gateway.logout({
  //     body: { name, email, password, confirmPass },
  //   });

  //   if (data.user && data.token) {
  //     setUser(data.user);
  //     setToken(data.token);

  //     return true;
  //   }

  //   return false;
  // };

  // Destrói a sessão
  const signout = async () => {
    await gateway.logout();

    setUser(null);
  };

  // Guarda o token no localStorage do navegador
  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  // Ainda no contexto de autenticação, o useEffect será chamado para validar o token
  // Isso permite que apenas sessões com token acessem as páginas do sistema após login
  useEffect(() => {
    const handler = async () => {
      return await api.validateToken();
    };

    if (localStorage.getItem("authToken")) {
      handler()
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    }
  }, []);

  // Retorna o elemento JSX do AuthProvider dentro do contexto de autenticação
  // Isso permite que o AuthProvider seja utilizado com elemento do HTML
  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within as AuthProvider");
  }

  return context;
};

export { useAuth, AuthProvider };
