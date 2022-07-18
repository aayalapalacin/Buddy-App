//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
// import { AuthProvider } from "./views/LoginCode/LoginComponents/AuthProvider";
import Layout from "./layout.js";
// import ForgotPassword from "./views/LoginCode/LoginComponents/ForgotPassword/ForgotPassword.jsx";
//remove login page and replace with layout to see page.
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
