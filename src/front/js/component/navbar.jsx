import React from "react";
import buddyImg from "../../img/buddyapp2.png";

export function Navbar() {
  return (
    <header className="main-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg main-nav px-0 pt-0 navbarContainer">
          <img
            src={buddyImg}
            id="userGoalPic"
            className="CharacterCard-img-top"
            alt="..."
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar icon-bar-1"></span>
            <span className="icon-bar icon-bar-2"></span>
            <span className="icon-bar icon-bar-3"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ml-auto text-uppercase f1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/LoginPage">Login</a>
              </li>
              <li>
                <a href="/AccountApp">Sign Up</a>
                {/* <Link to="/LoginPage">
            <button className="nav-login">Login</button>
          </Link>
    
          <Link to="/AccountApp">
            <button className="nav-register">Sign up</button>
          </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
