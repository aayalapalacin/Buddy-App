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

import IntroPage from "./views/MainContent/Introduction/IntroPage.jsx";
import WelcomeApp from "./views/LoginCode/LoginComponents/WelcomeApp.jsx";



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
              <IntroPage />
            </Route>
            <Route exact path="/LoginPage">
              <LoginPage />
              {/* Made login page the starting page */}
            </Route>
            <Route exact path="/WelcomeApp">
              <WelcomeApp />
            </Route>
            <Route exact path="/ForgotPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/AccountApp">
              <Register />
            </Route>
            <Route exact path="/RegisterApp">
              <RegisterApp />
            </Route>
            <Route exact path="/LoginApp">
              <LoginPage />
            </Route>
            <Route exact path="/todoList">
              <TodoList />
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/dashboard">
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
