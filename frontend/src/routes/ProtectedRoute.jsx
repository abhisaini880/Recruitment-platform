import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import { getAuthToken } from "../utils/authTokens"

const ProtectedRoute = () => {
  const isLoggedIn = () => !!getAuthToken()
  const location = useLocation()

  return isLoggedIn() ? (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  )
}

export default ProtectedRoute
