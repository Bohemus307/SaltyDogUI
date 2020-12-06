import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

// import Login from './Containers/Login/Login.jsx';
// import DashBoard from './Containers/DashBoard/DashBoard.jsx';
// import Home from './Components/Home/Home.jsx';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
// import SignUp from './Components/SignUp/SignUp.jsx';
// import NavBar from './Components/NavBar/NavBar.jsx';
import client from './graphql/client.js';
import Spinner from './Components/UI/Spinner/Spinner.jsx';

const Home = lazy(() => import('./Components/Home/Home.jsx'));
const Login = lazy(() => import('./Containers/Login/Login.jsx'));
const DashBoard = lazy(() => import('./Containers/DashBoard/DashBoard.jsx'));
const SignUp = lazy(() => import('./Components/SignUp/SignUp.jsx'));
const PrivateRoute = lazy(() => import('./Components/PrivateRoute/PrivateRoute.jsx'));
const NavBar = lazy(() => import('./Components/NavBar/NavBar.jsx'));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Suspense fallback={<Spinner />}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/dashboard" component={DashBoard} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </ApolloProvider>
  );
}
