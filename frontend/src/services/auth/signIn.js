import { ApiCall } from "../apiWrapper"
import { ApiRoutes } from "../apiRoutes"

export const signIn = async (credentials) => {
  try {
    const response = await ApiCall("POST", ApiRoutes.SignIn, {
      data: {
        email: credentials.email,
        password: credentials.password,
      },
      public_api: true,
    })
    return response
  } catch (error) {
    console.error("Error signing in", error)
    throw error
  }
}
