import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = ({allowedRoles}: any) => {
  return <Outlet />
}

export default PrivateRoute