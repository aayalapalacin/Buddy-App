import React, {useState} from "react";
import LoginForm from "./LoginForm";
import "./login.css";
const LoginApp = () => {
  const adminUser = {
    admin: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };
  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="login-app">
        {(user.email != "") ? (
            <div className="welcome">
                <h2>Welcome,<span>{user.name}</span></h2>
                <button>Logout</button>
            </div>
        ) : (
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome!</h1>
          <LoginForm Login={Login} error={error} />
        </div>
      </div>
      )};
    </div>
  );
};

export default LoginApp;
