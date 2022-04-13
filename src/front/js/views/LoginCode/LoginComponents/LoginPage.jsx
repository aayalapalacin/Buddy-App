import React from "react";
import LoginApp from "./LoginApp.jsx";
import BuddyLogo from "/workspace/Buddy-App/src/front/img/buddyapp2.png"
import { Navbar } from "react-bootstrap";
import {Container}from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import "../css/login.css";

const LoginPage = () => {

  return (
    <>
  {/* <Navbar expand="lg" variant="dark" bg="dark">
  <Container>
    <Navbar.Brand href="#">   
    </Navbar.Brand>
  </Container>
</Navbar>
     <div className="image">
            <img src={BuddyLogo} className="buddy-logo"/>
     </div>
     <div className="whitespace">l</div> */}
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
