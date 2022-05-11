import React, { useState, useRef, useEffect, useContext } from "react";
import useStore from "/workspace/Buddy-App/src/front/js/store/zustand.js";
import { Link, useHistory } from "react-router-dom";
import "../css/login.css";

const LoginForm = () => {
  const actions = useStore((state) => state.actions);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState(null);

  return (
    <>
      {" "}
      {err && <div className="alert alert-danger">{err}</div>}
      <div className="inputs">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input
              type="text"
              className="username"
              name="name"
              placeholder="Email"
              id="email"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
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
            <button
              onClick={() =>
                actions
                  .login(email, pwd)
                  .then(() => history.push("/WelcomeApp"))
                  .catch((error) => setErr(error.message))
              }
              type="submit"
              value="Login"
              className="login-button"
            >
              Login
            </button>
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
