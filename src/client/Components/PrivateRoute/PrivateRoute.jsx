import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import { isLoggedIn } from '../Auth/auth';

const PrivateRoute = ({ path, exact, component }) => {
  const condition = isLoggedIn();

  return condition ? (<Route path={path} exact={exact} component={component} />)
    : (<Redirect to="/login" />);
};

PrivateRoute.propTypes = {
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired,
};

export default PrivateRoute;
