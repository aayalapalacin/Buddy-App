import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
const Topbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="logo-title">
          <h2>
            <FontAwesomeIcon icon={faSmile} />
            BuddyApp
          </h2>
        </div>

        <div className="ml-auto">
          <Link to="/LoginPage">
            <button className="btn btn-primary">Login</button>
          </Link>

          <Link to="/AccountApp">
            <button className="btn btn-primary">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
