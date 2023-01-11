import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container } from "./styles";

function HeaderComponent() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        auth.signout();
        navigate("/");
    }

    return (
        <Container>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    {auth.user && <li className="nav-item"><Link to="/customers" className="nav-link px-2 text-white">Clientes</Link></li >}
                </ul>

                <div className="text-end">
                    {!auth.user && <a href="/login" className="btn btn-outline-light me-2">Login</a>}
                    {!auth.user && <a href="/register" className="btn btn-warning">Registrar</a>}

                    {auth.user && <button onClick={handleLogout} className="btn btn-warning">Deslogar</button>}
                </div>
            </div>
        </Container>
    );
}

export default HeaderComponent;