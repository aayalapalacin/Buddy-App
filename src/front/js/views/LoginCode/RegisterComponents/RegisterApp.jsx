import React from 'react'
import { Link } from "react-router-dom"
import "../css/registerpage.css"
const RegisterApp = () => {
  return (
    <div>
      <div className="register-container">
        <div className="reg-content">
          <div className="reg-intro">
            <h1 className="reg-title">Welcome to BuddyApp!</h1>
            <div className="dscrp">
            <h6>As you might already know, we are a company designed to help you find the people you need to drive you towards success. We are here to help you. We create the bridge between your personal goals and others who have similar desired goals.
              <br></br>
              <br></br>
              So, without further ado...
            </h6>
            </div>
            <Link to="/todoList">
              <button type="submit" className="register-button">
                Let's get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterApp