import React from "react";
import LoginApp from "./LoginApp.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import "../login.css";

const LoginPage = () => {

  return (
    <div className="login-page">
      <div className="logo-title">
      <h2><FontAwesomeIcon icon={faSmile} />
        BuddyApp</h2>
      </div>
      <LoginApp />
    </div>
  );
};

export default LoginPage;
