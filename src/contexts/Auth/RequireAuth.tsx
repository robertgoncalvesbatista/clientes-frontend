import { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";

// Exporta o elemento JSX do RequireAuth
// O RequireAuth pode ser usado no HTML para validar se o usuário está ou não autenticado
export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />;
    }

    return children;
}