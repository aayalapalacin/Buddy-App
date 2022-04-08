import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import injectContext from "./store/appContext";


import LoginPage from "./views/Login/LoginComponents/LoginPage.jsx";


import TodoList from "./views/DragDrop/todoList.jsx";
import Register from "./views/Login/RegisterComponents/AccountApp.jsx";
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
              <LoginPage />
              {/* Made login page the starting page */}
            </Route>
            <Route exact path="/AccountApp">
              <Register />
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
            {/* add more routes when files merge */}
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
