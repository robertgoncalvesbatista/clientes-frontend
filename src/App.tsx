import React from "react";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "./contexts/Auth/RequireAuth";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import ListCustomers from "./pages/customer/list";
import CreateCustomer from "./pages/customer/create";
import UpdateCustomer from "./pages/customer/update";

function App() {
    return (
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                    path="/customers"
                    element={
                        <RequireAuth>
                            <ListCustomers />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/create/customer"
                    element={
                        <RequireAuth>
                            <CreateCustomer />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/update/customer/:id"
                    element={
                        <RequireAuth>
                            <UpdateCustomer />
                        </RequireAuth>
                    }
                />
            </Routes>
        </React.StrictMode>
    );
}

export default App;
