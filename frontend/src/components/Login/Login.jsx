import React from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={ assets.user } alt='' className='icons'></img>
                    <input type="email" id="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={ assets.padlock } alt="" className="icons" />
                    <input type="password" id="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    </div>
  )
}

export default Login