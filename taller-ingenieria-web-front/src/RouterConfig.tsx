import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio'
import Pagar from './Components/Contabilidad/Pagar/Pagar'
import Reservar from './Components/Contabilidad/Reservar/Reservar'
import Gastos from './Components/Contabilidad/Gastos/Gastos'

const RouterConfig = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/gastos" element={<Gastos />} />
    </Routes>
    </>
  )
}

export default RouterConfig