import React from "react";
import { Link } from "react-router-dom";
import "./register.css"

const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="header">First time? Let's get you ready for your future</div>
        <div className="content">
          <div className="image"></div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"></input>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
