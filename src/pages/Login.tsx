import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            isLogged ? navigate("/") : alert("Não deu certo!");
        }
    };

    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
                    <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" onClick={handleLogin}>Sign up</button>

                        <hr className="my-4" />
                        <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>
            </div>
        </div>
    )
}