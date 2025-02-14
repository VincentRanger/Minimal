import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoute = () => {
    const userRole = localStorage.getItem('userRole')
  
    return userRole ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute