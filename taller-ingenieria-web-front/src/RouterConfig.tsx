import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio'

const RouterConfig = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Inicio />} />
    </Routes>
    </>
  )
}

export default RouterConfig