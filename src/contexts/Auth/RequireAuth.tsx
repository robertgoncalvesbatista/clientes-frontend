import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

// Exporta o elemento JSX do RequireAuth
// O RequireAuth pode ser usado no HTML para validar se o usuário está ou não autenticado
export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    if (!auth.user) {
        navigate("/login");
    }

    return children;
}