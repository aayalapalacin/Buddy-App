import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
// import useParams from "useParams";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useStore from "/workspace/Buddy-App/src/front/js/store/zustand.js";

import "../css/register.css";

const Register = () => {
  const actions = useStore((state) => state.actions);
  
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  
 console.log(email);
 console.log(user);
 console.log(pwd);
 
 
 
 
 
  // const [item, setItem] = useState("");
  // const [taskArray, setTaskArray] = useState(TASKS);
  // useEffect(() => {
  //   actions.setName(name);
  // }, []);
  // useEffect(() => {
  //   actions.setUser(user);
  // }, []);
  // useEffect(() => {
  //   actions.setPwd(pwd);
  // }, []);

 
  // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  
  // const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // const [pwd, setPwd] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  // const [matchPwd, setMatchPwd] = useState("");
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState("");




  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // if button enabled with JS hack
  //   const v1 = USER_REGEX.test(user);
  //   const v2 = PWD_REGEX.test(pwd);
  //   if (!v1 || !v2) {
  //     setErrMsg("Invalid Entry");
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(
  //       REGISTER_URL,
  //       JSON.stringify({ user, pwd }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response?.data);
  //     console.log(response?.accessToken);
  //     console.log(JSON.stringify(response));
  //     setSuccess(true);

  //     setUser("");
  //     setPwd("");
  //     setMatchPwd("");
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 409) {
  //       setErrMsg("Username Taken");
  //     } else {
  //       setErrMsg("Registration Failed");
  //     }
  //     errRef.current.focus();
  //   }
  // };
  return (
    <>
      <div className="register-container">
        <div className="header">
          <h1>First time?</h1>
          <br></br>
          <h3>Let's get you ready for your future</h3>
        </div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <form >
                <label htmlFor="username">
                  Username
                </label>
                <br></br>
                <input
                  className="reg-user"
                  type="text"
                  id="username"
                  placeholder="username"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  // aria-invalid={validName ? "false" : "true"}
                  // aria-describedby="uidnote"
                  // onFocus={() => setUserFocus(true)}
                  // onBlur={() => setUserFocus(false)}
                ></input>
                {/* <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                > */}
                  {/* <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p> */}

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                    {/* <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validPwd || !pwd ? "hide" : "invalid"}
                    /> */}
                  </label>
                  <br></br>
                  <input
                    className="reg-user"
                    type="text"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    // aria-invalid={validPwd ? "false" : "true"}
                    // aria-describedby="pwdnote"
                    // onFocus={() => setPwdFocus(true)}
                    // onBlur={() => setPwdFocus(false)}
                  ></input>
                  {/* <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  > */}
                    {/* <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p> */}
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">
                  Password
                    {/* <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    /> */}
                  </label>
                  <br></br>
                  <input
                    className="reg-user"
                    type="password"
                    name="pwd"
                    placeholder="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    // aria-invalid={validMatch ? "false" : "true"}
                    // aria-describedby="confirmnote"
                    // onFocus={() => setMatchFocus(true)}
                    // onBlur={() => setMatchFocus(false)}
                  ></input>
                  {/* <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p> */}
                </div>
              </form>
            </div>
          </div>
          <div className="footer">
            <Link to="/RegisterApp">
              <button onClick={() =>actions.register(user, email, pwd)} type="button" className="reg-btn">
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
