import { useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { AuthContext } from "./contexts/Auth/AuthContext";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from "./pages/Home";
import { Customers } from './pages/Customers';
import { CreateCustomer } from "./pages/CreateCustomer";
import { UpdateCustomer } from "./pages/UpdateCustomer";

const App = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  }

  return (
    <div className="d-flex flex-column vh-100">
      <header className="p-3 mb-auto text-bg-dark">
        <div className="container">
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
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/customers" element={<RequireAuth><Customers /></RequireAuth>} />
        <Route path="/create/customer" element={<RequireAuth><CreateCustomer /></RequireAuth>} />
        <Route path="/update/customer/:id" element={<RequireAuth><UpdateCustomer /></RequireAuth>} />
      </Routes>

      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <span className="text-light">Devenvolvido por Robert Gonçalves Batista.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
