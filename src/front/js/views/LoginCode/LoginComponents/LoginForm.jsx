import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "./AuthProvider.js";
import axios from "/workspace/Buddy-App/src/api/axios.js";
import { Link } from "react-router-dom";
import "../css/login.css";
import useStore from "../../../store/zustand";
import { useHistory } from "react-router-dom";

const LOGIN_URL = "./auth";
const LoginForm = () => {
  // const [details, setDetails] = useState({ username: "", password: "" });
  const { setAuth } = useContext(AuthContext);
  const actions = useStore((state) => state.actions);
  const history = useHistory();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  console.log("user", user);
  console.log("pwd", pwd);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  // useEffect(() => {
  //   if (user.user) {
  //     history.push("/WelcomeApp");
  //   }
  // }, [user]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const hisPush = () => {
    if (user.message === "Succesfully logged in") {
      return "WelcomeApp";
    } else {
      return "LoginPage";
    }
  };

  let hisUrl = hisPush();
  console.log("history", hisPush());
  return (
    <>
      <div className="inputs">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={submitHandler}>
          {/* {error != "" ? <div className="error">{error}</div> : ""} */}
          <label>
            <input
              type="text"
              className="username"
              name="name"
              placeholder="Username"
              id="username"
              ref={userRef}
              autoComplete="off"
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
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </label>
          <br></br>
          <br></br>
          {/* 
          <Link to="/ForgotPassword">
            <label href="/" className="iforgor">
              Forgot Password?
            </label>
          </Link> */}

          <div>
            {/* <Link to="/WelcomeApp"> */}

            <button
              onClick={() => {
                actions.login(user, pwd).then((resp) => {
                  if (resp.message === "Succesfully logged in") {
                    history.push("/WelcomeApp");
                  } else {
                    console.log("failed login");
                  }
                });
              }}
              type="submit"
              value="Login"
              className="login-button"
            >
              Login
            </button>
            {/* </Link> */}
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
