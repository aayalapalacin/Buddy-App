//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout.jsx";
// import ForgotPassword from "./views/LoginCode/LoginComponents/ForgotPassword/ForgotPassword.jsx";
  //remove login page and replace with layout to see page.
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
