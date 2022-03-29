import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome!</h1>
          <div className="inputs">
            <form>
              <div className="username">Username</div>
              <div className="password">Passcode</div>
            </form>
          </div>
          <button className="login-button">Login</button>
          <button className="account-button">Create a new account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
