import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="logo-title">
      <h2><FontAwesomeIcon icon={faSmile} />
        BuddyApp</h2>
      </div>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome!</h1>
          <div className="inputs">
            <form>
              <label>
                <input
                  className="username"
                  type="text"
                  name="name"
                  placeholder="Username"
                />
              </label>
              <br></br>
              <label>
                <input
                  className="password"
                  type="text"
                  name="name"
                  placeholder="Password"
                />
              </label>
            </form>
            <a href="/">Forgot Password?</a>
          </div>
          <button className="login-button">Login</button>
          <button className="account-button">Create a new account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
