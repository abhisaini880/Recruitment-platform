import React, { useState } from "react"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import "./AuthForm.css"

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  return (
    <div className="auth-form">
      <div className="auth-form__tabs">
        <button onClick={toggleForm} className={!isSignUp ? "active" : ""}>
          <h2>Sign In</h2>
        </button>
        <button onClick={toggleForm} className={isSignUp ? "active" : ""}>
          <h2>Sign Up</h2>
        </button>
      </div>
      <div className="auth-form__content">
        {isSignUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  )
}

export default AuthForm
