import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

interface RequireAuthProps {
  children: JSX.Element;
}

// Exporta o elemento JSX do RequireAuth
// O RequireAuth pode ser usado no HTML para validar se o usuário está ou não autenticado
const RequireAuth = ({ children }: RequireAuthProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    navigate("/login");
  }

  return children;
};

export default RequireAuth;
