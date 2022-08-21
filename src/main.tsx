import React from "react"

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from './contexts/Auth/AuthProvider';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);