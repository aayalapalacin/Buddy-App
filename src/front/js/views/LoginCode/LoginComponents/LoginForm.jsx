import React, { useState, useRef, useEffect, useContext } from "react";
import useStore from "/workspace/Buddy-App/src/front/js/store/zustand.js";
import { Link } from "react-router-dom";
import "../css/login.css";

const LoginForm = () => {
  const actions = useStore((state) => state.actions);


  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")


  return (
    <>
      <div className="inputs">
        <form>
          <label>
            <input
              type="text"
              className="username"
              name="name"
              placeholder="Email"
              id="email"
              autoComplete="off"
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
              <button onClick={() => actions.login(email, pwd)} type="submit" value="Login" className="login-button">
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
