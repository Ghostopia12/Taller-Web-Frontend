import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { isAuthenticated } from '../utils/Authentication';

const ProtectedRoute = ({
    canActivate = false,
    redirectPath = '/login',
}) => {
    const MySwal = withReactContent(Swal);

    if (!canActivate){
        if(!isAuthenticated()){
            MySwal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Necesitas estar autenticado para entrar a esa pagina",
            });
        }
        return <Navigate to={redirectPath} replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute