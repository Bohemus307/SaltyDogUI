import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/Auth.jsx';

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (authTokens ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
      ))}
    />
  );
}

export default PrivateRoute;

// change isAuthenticated to Authtokens once axios is complete
