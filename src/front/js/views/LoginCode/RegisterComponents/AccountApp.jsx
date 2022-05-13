import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "/workspace/Buddy-App/src/front/js/store/zustand.js";

import "../css/register.css";

const Register = () => {
  const actions = useStore((state) => state.actions);

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [insp, setInsp] = useState("");
  const [funFt, setFunFt] = useState("");

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
            <Link to="/RegisterApp">
              <button
                onClick={() => actions.register(user, email, pwd, insp, funFt)}
                type="button"
                className="reg-btn"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
