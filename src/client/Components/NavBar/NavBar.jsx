import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import classes from './NavBar.css';

const NavBar = () => (
  <div className={classes.Nav_Div}>
    <div>
      <NavLink to="/">Home</NavLink>
    </div>
    <div>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  </div>
);

export default NavBar;
