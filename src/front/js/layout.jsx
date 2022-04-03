import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import injectContext from "./store/appContext";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import LoginPage from "./component/LoginPage/LoginPage.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import TodoList from "./component/todoList.jsx";

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
            <Route exact path="/todoList">
              <TodoList />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
         
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
