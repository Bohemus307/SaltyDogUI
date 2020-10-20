import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import classes from './NavBar.css';

const NavBar = () => (
  <div className={classes.Nav_Div}>
    <div className={classes.Nav_Item}>
      <img className={classes.Nav_Image} src="/images/home.svg" alt="Home" />
      <NavLink to="/">Home</NavLink>
    </div>
    <div className={classes.Nav_Item}>
      <img className={classes.Nav_Image} src="/images/enter.svg" alt="Login" />
      <NavLink to="/login">Login</NavLink>
    </div>
    <div className={classes.Nav_Item}>
      <img className={classes.Nav_Image} src="/images/dashboard.svg" alt="Dash Board" /> 
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  </div>
);

export default NavBar;
