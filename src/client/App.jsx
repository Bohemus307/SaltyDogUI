import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Login from './Components/Login/Login.jsx';
import DashBoard from './Containers/DashBoard/DashBoard.jsx';
import Home from './Components/Home/Home.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import { AuthContext } from './Components/Context/Auth.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

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
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={DashBoard} />
            {/* <PrivateRoute path="/dashboard" component={DashBoard} /> */}
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
