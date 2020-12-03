import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Login from './Containers/Login/Login.jsx';
import DashBoard from './Containers/DashBoard/DashBoard.jsx';
import Home from './Components/Home/Home.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import client from './graphql/client.js';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/dashboard" component={DashBoard} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
