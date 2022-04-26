import React from "react";

import LoginForm from "./LoginForm.jsx";
import { Link } from "react-router-dom";
import "../css/login.css";

const LoginApp = () => {

  return (
    <div className="login-app">

        <div className="login-container">
          <div className="login-card">
            <h1 className="login-title">Welcome!</h1>
            <LoginForm />
          </div>
        </div>
      </div>
  );
};

export default LoginApp;
