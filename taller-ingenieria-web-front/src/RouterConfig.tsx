import { Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio";
import Pagar from "./Components/Contabilidad/Pagar/Pagar";
import Reservar from "./Components/Contabilidad/Reservar/Reservar";
import Gastos from "./Components/Contabilidad/Gastos/Gastos";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import NotFound from "./Components/NotFound/NotFound";
import { isAuthenticated } from "./utils/Authentication.js";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Logout from "./Components/Login/Logout.js";
import { useEffect, useState } from "react";
const RouterConfig = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated());
    setIsUserAuthenticated(isAuthenticated());
  });

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute canActivate={isUserAuthenticated} />}>
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/" element={<Inicio />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouterConfig;
