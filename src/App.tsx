import { useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

import { Home } from "./pages/Home";
import { Login } from './pages/Login';
import { Private } from './pages/Private';

const App = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  }

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {auth.user && <li className="nav-item"><Link to="/private" className="nav-link px-2 text-white">Private</Link></li >}
            </ul>

            <div className="text-end">
              {!auth.user && <a href="/login" className="btn btn-outline-light me-2">Sign-in</a>}
              {!auth.user && <a href="/register" className="btn btn-warning">Sign-up</a>}

              {auth.user && <button onClick={handleLogout} className="btn btn-warning">Sair</button>}
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>

      <footer className="container fixed-bottom">
        <div className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
          </ul>

          <p className="text-center text-muted">© 2022 Company, Inc</p>
        </div>
      </footer>
    </>
  )
}

export default App
