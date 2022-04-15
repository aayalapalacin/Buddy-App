import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/login.css";
const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const { loginWithRedirect } = useAuth0();
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
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
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
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </label>
          <br></br>
          <br></br>    

           <Link to="/ForgotPassword"> 
          <a href="/" className="iforgor">Forgot Password?</a>
          </Link>
          
          <div>
          <button 
          type="submit" 
          value="Login" 
          className="login-button">
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
