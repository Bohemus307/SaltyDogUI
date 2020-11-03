import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './Containers/Login/Login.jsx';
import DashBoard from './Containers/DashBoard/DashBoard.jsx';
import Home from './Components/Home/Home.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/dashboard" component={DashBoard} /> */}
          <PrivateRoute path="/dashboard" component={DashBoard} />
        </Switch>
      </div>
    </Router>
  );
}
