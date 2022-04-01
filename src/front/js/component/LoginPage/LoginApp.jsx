import React, {useState} from "react";
import LoginForm from "./LoginForm.jsx";
import "./login.css";


const LoginApp = () => {
  const adminUser = {
    username: "David Dodson",
    password: "admin",
  };

  const [user, setUser] = useState({ username: ""});
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if(details.username == adminUser.username && details.password == adminUser.password){
      console.log("You did it")
      setUser({
        username: details.username
      });
    } else {
      console.log("Doesn't match")
      setError("Doesn't match")
    }
  };
  const Logout = () => {
    setUser({username: ""})
  };

  return (
    <div className="login-app">
        {(user.username != "") ? (
            <div className="welcome">
                <h2>Welcome,<span>{user.username}</span><img src="https://humornama.com/wp-content/uploads/2022/03/No-Bitches-Meme-Template-on-Megamind-1-768x1024.jpg" height={300}/></h2>
                <button onClick={Logout}>Logout</button>
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
