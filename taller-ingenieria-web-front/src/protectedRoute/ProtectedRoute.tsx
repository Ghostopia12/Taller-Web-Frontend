import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({
    canActivate = false,
    redirectPath = '/404',
}) => {
    if (!canActivate){
        return <Navigate to={redirectPath} replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute