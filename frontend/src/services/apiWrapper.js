import axios from "axios"
import { handleApiError } from "./errorHandlers"
import { getAuthToken } from "../utils/authTokens"

const axiosInstance = axios.create()

export const ApiCall = async (
  method,
  url,
  {
    params = {},
    data = null,
    headers = {},
    responseType = "json",
    public_api = false,
  }
) => {
  const authToken = getAuthToken()

  if (!public_api && !authToken) {
    // redirect to login page
    console.log("here")
  }

  const combinedHeaders = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${authToken}`,
    ...headers,
  }

  const options = {
    method: method,
    url,
    headers: combinedHeaders,
    params,
    data,
    responseType,
  }

  console.log(options)

  try {
    const response = await axiosInstance(options)
    return response.data
  } catch (error) {
    handleApiError(error)
    throw error
  }
}
