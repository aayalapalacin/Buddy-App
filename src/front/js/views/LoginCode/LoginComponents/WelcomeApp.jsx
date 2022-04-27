import React from "react";
import {Link} from "react-router-dom";
const WelcomeApp = () => {
  return (
    <div>
      <div>
        <div className="welcome">
          <div className="welcome-card">
            <h3 className="welcome-title">
              Welcome!
            </h3>
            <h4 className="welcome-message">Ready to accomplish the day?</h4>
            <br></br>
            <div className="buttonsnshit">
              <Link to="/todoList">
                <button type="submit" className="started-page">
                  Let's get started
                </button>
              </Link>
              <br></br>
              <button  className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeApp;
