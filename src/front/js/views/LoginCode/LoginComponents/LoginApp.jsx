import React, { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import { Link } from "react-router-dom";
import "../css/login.css";

const LoginApp = () => {
  const noBitches =
    "https://humornama.com/wp-content/uploads/2022/03/No-Bitches-Meme-Template-on-Megamind-1-768x1024.jpg";
  const adminUser = {
    username: "David Dodson",
    password: "a",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("You did it");
      setUser({
        username: details.username,
      });
    } else {
      console.log("Doesn't match");
      setError("Details don't match!");
    }
  };
  const Logout = () => {
    setUser({ username: "" });
  };

  return (
    <div className="login-app">
      {user.username != "" ? (
        <div>
          <div className="welcome">
            <h2 className="welcome-title">
              Welcome, <span>{user.username}!</span>
            </h2>
              <h4 className="welcome-message">Ready to accomplish the day?</h4>
              <br></br>
            <div className="buttonsnshit">
              <Link to="/todoList">
                <button type="submit" className="started-page">
                  Let's get started
                </button>
              </Link>
             <br></br>
              <button onClick={Logout} className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-container">
          <div className="login-card">
            <h1 className="login-title">Welcome!</h1>
            <LoginForm Login={Login} error={error} />
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default LoginApp;
