import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../Auth/auth';

// function PrivateRoute({ component: Component, ...rest }) {
//   const { authTokens } = isLoggedIn();

//   return (
//     <Route
//       {...rest}
//       render={(props) => (authTokens ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
//       ))}
//     />
//   );
// }
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => (isLoggedIn() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

export default PrivateRoute;

// change isAuthenticated to Authtokens once axios is complete
