import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Home } from "./pages/Home";

import { Login } from './pages/Login';
import { Private } from './pages/Private';

const App = () => {
  return (
    <>
      <header className="container">
        <div className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li >
            <li className="nav-item" > <a href="#" className="nav-link" > Features</a ></li >
            <li className="nav-item" > <a href="#" className="nav-link" > Pricing</a ></li >
            <li className="nav-item" > <a href="#" className="nav-link" > FAQs</a ></li >
            <li className="nav-item" > <a href="#" className="nav-link" > About</a ></li >
          </ul >
        </div >
      </header >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        } />
      </Routes>

      <footer className="container">
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
