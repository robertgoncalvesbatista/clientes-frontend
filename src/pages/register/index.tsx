import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import HeaderComponent from "../../components/header";
import FooterComponent from "../../components/footer";

import { ContainerRegister } from "./styles";

function Register() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPass] = useState("");

  async function handleRegister() {
    if (name && email && password && password_confirmation) {
      const isLogged = await auth.signup(
        name,
        email,
        password,
        password_confirmation
      );

      if (isLogged) {
        navigate("/");
      } else {
        alert("Não deu certo!");
      }
    }
  }

  return (
    <ContainerRegister>
      <HeaderComponent />

      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            Vertically centered hero sign-up form
          </h1>
          <p className="col-lg-10 fs-4">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <div className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="floatingName"
                placeholder="Digite seu nome..."
              />
              <label htmlFor="floatingName">Nome</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="floatingEmail"
                placeholder="Digite seu e-mail..."
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="floatingPassword"
                placeholder="Digite sua senha..."
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                value={password_confirmation}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirme sua senha..."
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              onClick={handleRegister}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>

      <FooterComponent />
    </ContainerRegister>
  );
}

export default Register;
