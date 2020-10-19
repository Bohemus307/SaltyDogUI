import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

import Auth from './Components/Auth/Auth.jsx';
import Home from './Components/Home/Home.jsx';

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/protected">Dashboard</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            {/* <LoginPage /> */}
            <Auth />
          </Route>
          <PrivateRoute path="/protected">
            <DashBoard />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// function AuthButton() {
//   const history = useHistory();
//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!
//       {' '}
//       <button
//         type="button"
//         onClick={() => {
//           fakeAuth.signout(() => history.push('/'));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => (fakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

function DashBoard() {
  return <div>Hello from dashboard</div>;
}

// function LoginPage() {
//   const history = useHistory();
//   const location = useLocation();

//   const { from } = location.state || { from: { pathname: '/' } };
//   const login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>
//         You must log in to view the page at
//         {from.pathname}
//       </p>
//       <button type="submit" onClick={login}>Login</button>
//     </div>
//   );
// }