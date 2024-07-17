// API Base URL
const BaseUrl = "http://localhost:8000"

const ApiRoutes = {
  // Auth Routes
  SignIn: `${BaseUrl}/api/auth/token`,
  SignUp: `${BaseUrl}/api/user`,
  // Add your routes here
}

// Export API Routes
export { ApiRoutes }
