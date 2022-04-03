import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <>
      <div className="inputs">
        <form onSubmit={submitHandler}>
          {(error != "") ? (<div className="error">{error}</div>) : ""}
          <label>
            <input
              type="text"
              className="username"
              name="name"
              placeholder="Username"
              id="username"
              onChange={e => setDetails({...details, username: e.target.value})} 
              value={details.username}
              />
          </label>
          <br></br>
          <label>
            <input
              type="password"
              className="password"
              name="name"
              placeholder="Password"
              id="password"
              onChange={e => setDetails({...details, password: e.target.value})} 
              value={details.password}
              />
          </label>
          <br></br>
              
          <a href="/">Forgot Password?</a>
          
          <button type="submit" value="Login" className="login-button">Login</button>
         
          <button className="account-button">Create a new account</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;