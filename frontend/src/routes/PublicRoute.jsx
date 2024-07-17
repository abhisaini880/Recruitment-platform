import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { getAuthToken } from "../utils/authTokens"

const PublicRoute = () => {
  const isLoggedIn = () => !!getAuthToken()
  const location = useLocation()

  return !isLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate to="/app" state={{ from: location }} />
  )
}

export default PublicRoute
