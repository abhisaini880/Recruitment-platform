import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../../services/auth/signIn"
import routesConfig from "../../../routes/routesConfig"
import { setAuthToken, getAuthToken } from "../../../utils/authTokens"

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const userToken = getAuthToken()

  // useEffect(() => {
  //   console.log("inside use effect")
  //   if (userToken) {
  //     navigate(routesConfig.app.path)
  //   }
  // }, [userToken])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signIn({ email, password })
    console.log(response)
    setAuthToken(response.access, response.refresh)
    navigate(routesConfig.app)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  )
}

export default SignInForm
