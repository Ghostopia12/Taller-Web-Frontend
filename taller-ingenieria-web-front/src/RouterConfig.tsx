import { Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio";
import Pagar from "./Components/Contabilidad/Pagar/Pagar";
import Reservar from "./Components/Contabilidad/Reservar/Reservar";
import Gastos from "./Components/Contabilidad/Gastos/Gastos";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import NotFound from "./Components/NotFound/NotFound";

const RouterConfig = () => {

  const isAuthenticated = () => {
    return true;
  }
  
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute canActivate={isAuthenticated()} />}>
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/gastos" element={<Gastos />} />
        </Route>
        <Route path="/" element={<Inicio />} />
        <Route path="/404" element = { <NotFound/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default RouterConfig;
