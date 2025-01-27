import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

import RequireAuth from "./RequireAuth";

import Home from "./../pages/home";
import Login from "./../pages/login";
import Register from "./../pages/register";

import ListCustomers from "./../pages/customer/list";
import UpdateCustomer from "./../pages/customer/update";
import CreateCustomer from "./../pages/customer/create";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
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

        {/*<Route
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
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
