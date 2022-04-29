import React, { useEffect, useState } from "react";
import LoginApp from "./LoginApp.jsx";
import BuddyLogo from "/src/front/img/buddyapp2.png";
// import { useAuth0 } from "@auth0/auth0-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSmile } from "@fortawesome/free-solid-svg-icons";
import "../css/login.css";

const LoginPage = () => {

const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const isLoading = setTimeout(() => {
      setIsLoading('Timeout called!');
    }, 100);
    return () => clearTimeout(isLoading);
  }, []);

  return (
    <>
      <div className="login-page">
        <div>
          <img src={BuddyLogo} className="navbar-logo" />
          {/* <h2><FontAwesomeIcon icon={faSmile} />
        BuddyApp</h2> */}
        </div>
        <LoginApp />
      </div>
    </>
  );
};

export default LoginPage;
