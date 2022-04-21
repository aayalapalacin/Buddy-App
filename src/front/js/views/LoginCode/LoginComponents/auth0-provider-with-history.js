import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Auth0Provider } from "@auth0/auth0-react";

// damn near worthless api
const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallBack = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectURL={window.location.origin}
      onRedirectCallBack={onRedirectCallBack}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
