import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useStore from "/workspace/Buddy-App/src/front/js/store/zustand.js";

import "../css/register.css";

const Register = () => {
  const actions = useStore((state) => state.actions);
  const userback = useStore((state) => state.user);

  const history = useHistory();

  const [email, setEmail] = useState("");

  //   () => {
  //   const localDataString = localStorage.getItem("register");
  //   const localDataObj = JSON.parse(localDataString);
  //   console.log("localDataOvj", localDataObj);
  //   const localUserEmail = localDataObj.email;
  //   return localDataString ? localUserEmail : "";
  // }

  const [user, setUser] = useState();

  //   () => {
  //   const localDataString = localStorage.getItem("register");
  //   const localDataObj = JSON.parse(localDataString);
  //   const localUserName = localDataObj.username;
  //   return localDataString ? localUserName : "";
  // }

  const [pwd, setPwd] = useState("");
  const [insp, setInsp] = useState();
  //   () => {
  //   const localDataString = localStorage.getItem("register");
  //   const localDataObj = JSON.parse(localDataString);
  //   const localUserInspiration = localDataObj.inspiration;
  //   return localDataString ? localUserInspiration : "";
  // }

  const [funFt, setFunFt] = useState();

  //   () => {
  //   const localDataString = localStorage.getItem("register");
  //   const localDataObj = JSON.parse(localDataString);
  //   const localUserFunFact = localDataObj.fun_fact;
  //   return localDataString ? localUserFunFact : "";
  // }

  useEffect(() => {
    localStorage.setItem("register", JSON.stringify(userback.user));
  }, [userback.user]);
  // console.log("userback", userback.user.email);
  return (
    <>
      <div className="register-container">
        <div className="header">
          <h3 id="firstTimeReg">First time?</h3>
          <h5>Let's get you ready for your future</h5>
        </div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <form>
                <label htmlFor="username">Username</label>
                <br></br>
                <input
                  className="reg-user"
                  type="text"
                  id="username"
                  placeholder="username"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                ></input>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input
                    className="reg-user"
                    type="text"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password</label>
                  <br></br>
                  <input
                    className="reg-user"
                    type="password"
                    name="pwd"
                    placeholder="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="insp">Inspiration</label>
                  <br></br>
                  <input
                    className="reg-user"
                    type="text"
                    name="insp"
                    placeholder="Inspiration"
                    onChange={(e) => setInsp(e.target.value)}
                    value={insp}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="funft">Fun Fact</label>
                  <br></br>
                  <input
                    className="reg-user"
                    type="text"
                    name="funft"
                    placeholder="funfact"
                    onChange={(e) => setFunFt(e.target.value)}
                    value={funFt}
                    required
                  ></input>
                </div>
              </form>
            </div>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                actions.register(user, email, pwd, insp, funFt).then((resp) => {
                  console.log("register", actions);
                  if (
                    resp.message ===
                    "Your account has been registered successfully"
                  ) {
                    history.push("/LoginPage");
                  } else {
                    console.log("failed to register");
                  }
                });
              }}
              type="button"
              className="reg-btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
