import { createBrowserRouter } from "react-router-dom"
import routesConfig from "./routesConfig"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"

// Import Pages
import AuthForm from "../pages/Auth/AuthForm"
import Dashboard from "../pages/Dashboard/Dashboard"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import Settings from "../pages/Settings/Settings"
import JobBoard from "../pages/JobBoard"

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: routesConfig.home,
        element: <AuthForm />,
      },
      {
        path: routesConfig.auth,
        element: <AuthForm />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: routesConfig.dashboard,
        element: <Dashboard />,
      },
      {
        path: routesConfig.app,
        element: <Dashboard />,
      },
      {
        path: routesConfig.settings,
        element: <Settings />,
      },
      {
        path: routesConfig.jobboard,
        element: <JobBoard />,
      },
    ],
  },
  {
    path: routesConfig.pageNotFound,
    element: <PageNotFound />,
  },
])

export default router
