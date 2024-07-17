import { ApiCall } from "../apiWrapper"
import { ApiRoutes } from "../apiRoutes"

export const signUp = async (userData) => {
  try {
    const response = await ApiCall("POST", ApiRoutes.SignUp, {
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
      public_api: true,
    })
    return response
  } catch (error) {
    console.error("Error signing up", error)
    throw error
  }
}
