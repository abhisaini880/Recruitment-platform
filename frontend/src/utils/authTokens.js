const TOKEN_KEY = "auth_token"
const REFRESH_TOKEN_KEY = "auth_refresh_token"

export const setAuthToken = (token, refresh_token = null) => {
  localStorage.setItem(TOKEN_KEY, token)
  if (refresh_token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
  }
}

export const getAuthToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  return token
}

export const clearAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  console.log("Token Removed")
}
