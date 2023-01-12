import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { AlignItems, Button, Container, LinkItem } from "./styles";

function HeaderComponent() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        auth.signout();
        navigate("/");
    }

    return (
        <Container>
            <AlignItems>
                <div style={{ display: 'flex' }}>
                    <img src="https://flowbite.com/docs/images/logo.svg" style={{ margin: '0 0.25rem' }} alt="Flowbite Logo" />
                    <h2 style={{ color: '#fff', margin: '0 0.25rem' }}>Clientes Frontend</h2>
                    {auth.user && <LinkItem href="/customers" style={{ margin: '0 2rem' }}>Clientes</LinkItem>}
                </div>


                {!auth.user &&
                    <div>
                        <LinkItem href="/login" button>Login</LinkItem>
                        <LinkItem href="/register" button>Register</LinkItem>
                    </div>
                }

                {auth.user &&
                    <Button onClick={handleLogout}>Deslogar</Button>
                }

            </AlignItems>
        </Container>
    );
}

export default HeaderComponent;