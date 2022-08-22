import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

// No contexto de autenticação, AuthProvider é responsável pela lógica das funções "signin" e "signout"
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    // Ainda no contexto de autenticação, o useEffect será chamado para validar o token
    // Isso permite que apenas sessões com token acessem as páginas do sistema após login
    useEffect(() => {
        (async () => {
            if (localStorage.getItem("authToken")) {
                const data = await api.validateToken();

                if (data) {
                    setUser(data);
                }
            }
        })()
    }, [api]);

    // Gera um token de acesso ao fornecer "email" e "password"
    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }

        return false;
    }

    // Gera um token de acesso ao fornecer "email" e "password"
    const signup = async (name: string, email: string, password: string, password_confirmation: string) => {
        const data = await api.signup(name, email, password, password_confirmation);

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }

        return false;
    }

    // Destrói a sessão
    const signout = async () => {
        await api.logout();

        setUser(null);
    }

    // Guarda o token no localStorage do navegador
    const setToken = (token: string) => {
        localStorage.setItem("authToken", token);
    }

    // Retorna o elemento JSX do AuthProvider dentro do contexto de autenticação
    // Isso permite que o AuthProvider seja utilizado com elemento do HTML
    return (
        <AuthContext.Provider value={{ user, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    )
}