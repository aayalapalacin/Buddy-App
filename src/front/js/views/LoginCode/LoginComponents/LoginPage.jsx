import React from "react";
import LoginApp from "./LoginApp.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import "../css/login.css";

const LoginPage = () => {

  return (
    <>

    <div className="login-page">
      <div className="logo-title">
      <h2><FontAwesomeIcon icon={faSmile} />
        BuddyApp</h2>
      </div>
      <LoginApp />
    </div>
    </>
  );
};

export default LoginPage;
