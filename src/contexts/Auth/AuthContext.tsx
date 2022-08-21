import { createContext } from "react";
import { User } from "../../types/User";

// Cria tipagem para o contexto de autenticação das rotas
// Dentro deste contexto será possível utilizar a propriedade "user" e as funções "signin" e "signout"
export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);