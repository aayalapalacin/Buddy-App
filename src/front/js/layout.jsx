import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import Dashboard from "./views/Dashboard/dashboard.js";

import injectContext from "./store/appContext";

import LoginPage from "./views/LoginCode/LoginComponents/LoginPage.jsx";
import RegisterApp from "./views/LoginCode/RegisterComponents/RegisterApp.jsx";

import TodoList from "./views/DragDrop/todoList.jsx";
import Register from "./views/LoginCode/RegisterComponents/AccountApp.jsx";
import ForgotPassword from "./views/LoginCode/LoginComponents/ForgotPassword/ForgotPassword.jsx";

import IntroPage from "./views/MainContent/IntroPage.jsx";
import WelcomeApp from "./views/LoginCode/LoginComponents/WelcomeApp.jsx";
import { Navbar } from "./component/navbar.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <IntroPage />
            </Route>
            <Route exact path="/LoginPage">
              <Navbar />
              <LoginPage />
              {/* Made login page the starting page */}
            </Route>
            <Route exact path="/WelcomeApp">
              <Navbar />
              <WelcomeApp />
            </Route>
            <Route exact path="/ForgotPassword">
              <Navbar />
              <ForgotPassword />
            </Route>
            <Route exact path="/AccountApp">
              <Navbar />
              <Register />
            </Route>
            <Route exact path="/RegisterApp">
              <Navbar />
              <RegisterApp />
            </Route>
            <Route exact path="/LoginApp">
              <Navbar />
              <LoginPage />
            </Route>
            <Route exact path="/todoList">
              <Navbar />
              <TodoList />
            </Route>
            <Route exact path="/">
              <Navbar />
              <LoginPage />
            </Route>
            <Route exact path="/dashboard">
              <Navbar />
              <Dashboard />
            </Route>
            {/* add more routes when files merge */}
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
