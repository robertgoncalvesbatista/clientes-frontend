import React from "react";
import ReactDOM from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";

import { ptBR } from "@mui/x-data-grid/locales";
import { ptBR as pickers_ptBR } from "@mui/x-date-pickers/locales";
import { ptBR as core_ptBR } from "@mui/material/locale";

import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./routes";

import "./index.css";

const theme = createTheme({}, ptBR, pickers_ptBR, core_ptBR);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
