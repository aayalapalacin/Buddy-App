import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css"
import BuddyLogo from "/workspace/Buddy-App/src/front/img/buddyapp2.png"
const Register = () => {
  return (
    <>
          <div className="image">
            <img src={BuddyLogo} className="buddy-logo"/>
          </div>
      <div className="register-container">
        <div className="header">
          <h2>First time?</h2> 
            <br></br>
            <h3>Let's get you ready for your future</h3>
            </div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <br></br>
              <input className="reg-user" type="text" name="username" placeholder="username" ></input>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <br></br>
                <input className="reg-user" type="email" name="email" placeholder="email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br></br>
                <input className="reg-user" type="password" name="password" placeholder="password" ></input>
              </div>
            </div>
          </div>
          <div className="footer">
            <Link to="/RegisterApp">
            <button type="button" className="reg-btn">
              Register
            </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
