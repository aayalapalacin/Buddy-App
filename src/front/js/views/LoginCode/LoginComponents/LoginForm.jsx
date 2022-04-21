import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/login.css";
const LoginForm = ({ Login, error }) => {
  // const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  // useEffect(() =>{
  //   userRef.current.focus();
  // }, [])

  return (
    <>
      <div className="inputs">
        <form onSubmit={submitHandler}>
          {error != "" ? <div className="error">{error}</div> : ""}
          <label>
            <input
              type="text"
              className="username"
              name="name"
              placeholder="Username"
              id="username"
              ref={userRef}
              autocomplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </label>
          <br></br>
          <label>
            <input
              type="password"
              className="password"
              placeholder="Password"
              id="password"
              ref={userRef}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </label>
          <br></br>
          <br></br>

          <Link to="/ForgotPassword">
            <label href="/" className="iforgor">
              Forgot Password?
            </label>
          </Link>

          <div>
            <Link to="/WelcomeApp">
              <button type="submit" value="Login" className="login-button">
                Login
              </button>
            </Link>
            <Link to="/AccountApp">
              <button className="account-button">Create a new account</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
