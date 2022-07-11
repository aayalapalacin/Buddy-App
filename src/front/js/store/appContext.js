import React, { useState, useEffect } from "react";

import useStore from "./zustand.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const state = useStore((state) => state);
    const actions = useStore((state) => state.actions);

    const loadCategories = (
      store,
      // url = "https://3001-avokeys-buddyapp-4rimlyd8qp6.ws-us41.gitpod.io/api/categories"
      url = process.env.BACKEND_URL + "/api/categories"
    ) => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          store.setCategories(result);
        });
    };
    const loadGoals = (
      store,
      // url = "https://3001-avokeys-buddyapp-4rimlyd8qp6.ws-us41.gitpod.io/api/categories"
      url = process.env.BACKEND_URL + "/api/goal"
    ) => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          store.setGoals(result);
        });
    };

    useEffect(() => {
      // actions.refresh();

      /**
       * EDIT THIS!
       * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
       * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
       * store, instead use actions, like this:
       *
       * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
       *
       **/
      state.actions.refresh();
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
