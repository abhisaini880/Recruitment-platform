const routesConfig = {
  home: {
    path: "/",
    auth: {
      path: "auth",
      fullPath: "/auth",
    },
  },
  app: {
    path: "/app",
    dashboard: {
      path: "dashboard",
      fullPath: "/app/dashboard",
    },
  },
  pageNotFound: {
    path: "*",
  },
}

export default routesConfig
