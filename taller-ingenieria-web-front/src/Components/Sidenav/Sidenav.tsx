import React from 'react'
import './Sidenav.css'
import {  NavLink } from 'react-router-dom';

const Sidenav = () => {
  
  
    const hideNavBar = () => {
        alert("hideNavBar");
    }

    return (
    <nav id="sideNav">
        <button onClick={()=>{
            hideNavBar();
        }}>
            BackNavButton
        </button>
        <ul className='ul'>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/pagar'>Pagar</NavLink>
            <NavLink to='/reservar'>Reservar</NavLink>
            <NavLink to='/gastos'>Gastos</NavLink>
        </ul>
    </nav>
  )
}

export default Sidenav