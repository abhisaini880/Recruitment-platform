import { createBrowserRouter } from "react-router-dom"
import routesConfig from "./routesConfig"

// Import Pages
import AuthForm from "../pages/Auth/AuthForm"
import Dashboard from "../pages/Dashboard/Dashboard"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: routesConfig.home.path,
        element: <AuthForm />,
      },
      {
        path: routesConfig.home.auth.path,
        element: <AuthForm />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: routesConfig.app.dashboard.fullPath,
        element: <Dashboard />,
      },
      {
        path: routesConfig.app.path,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: routesConfig.pageNotFound.path,
    element: <PageNotFound />,
  },
])

export default router
