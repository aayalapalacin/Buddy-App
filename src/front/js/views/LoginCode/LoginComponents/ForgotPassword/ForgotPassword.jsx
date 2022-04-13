import React from 'react'
import { Link } from "react-router-dom"
import "./forgotpassword.css"
const ForgotPassword = () => {
  return (
    <div>
        <div className="pass-container">
            <div className="pass-card">
                <div className="pass-title">
                  <h1>Forgot Password?</h1>
                </div>
                <div className="pass-dscrp">
                  <p>Enter email for password confirmation. Enter and re-enter your password for entry</p>
                </div>
                <div className="pass-group">
                <label htmlFor="email">Email</label>
                <br></br>
                <input className="pass-user" type="email" name="email" placeholder="email"></input>
              </div>
              <div className="pass-group">
                <label htmlFor="password">Password</label>
                <br></br>
                <input className="pass-user" type="password" name="password" placeholder="password" ></input>
              </div>     
               <div className="pass-group">
                <label htmlFor="password"> Re-enter Password</label>
                <br></br>
                <input className="pass-user" type="password" name="password" placeholder="password" ></input>
              </div>
              <div className="buttons">
                <Link to="/RegisterApp">
                  <button className="pass-btn">Reset Password</button>
                  </Link>
                  <Link to ="/">
                  <button className="pass-btn">Go back</button>
                  </Link>             
              </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword