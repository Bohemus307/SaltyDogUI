import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import classes from './NavBar.css';
import Logo from '../Logo/Logo.jsx';

const NavBar = () => (
  <div className={classes.Nav_Div}>
    <div className={classes.Nav_Logo}>
      <Logo height="75px" />
    </div>
    <div className={classes.Nav_Item}>
      <img className={classes.Nav_Image} src="/images/home.svg" alt="Home" />
      <NavLink style={{ textDecoration: 'none', color: '#606468' }} to="/">Home</NavLink>
    </div>
    <div className={classes.Nav_Item}>
      <img className={classes.Nav_Image} src="/images/enter.svg" alt="Login" />
      <NavLink style={{ textDecoration: 'none', color: '#606468' }} to="/login">Login</NavLink>
    </div>
    <div className={classes.Nav_Item}>
      <img className={classes.Nav_Image} src="/images/dashboard.svg" alt="DashBoard" />
      <NavLink style={{ textDecoration: 'none', color: '#606468' }} to="/dashboard">Dashboard</NavLink>
    </div>
  </div>
);

export default NavBar;
