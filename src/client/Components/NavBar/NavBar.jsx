import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import classes from './NavBar.css';

const NavBar = () => (
  <div className={classes.Nav_Div}>
    <div className={classes.Nav_Logo}>
      <NavLink className={classes.Logo} to="/">
        <img className={classes.Image} src="/images/heronlogo.png" alt="logo" name="logo" />
      </NavLink>
    </div>
    <div className={classes.Nav_Items}>
      <NavLink className={classes.Nav_Link} style={{ textDecoration: 'none', color: '#606468' }} to="/">
        <img className={classes.Nav_Image} src="/images/home.svg" alt="Home" />
        Home
      </NavLink>
      <NavLink className={classes.Nav_Link} style={{ textDecoration: 'none', color: '#606468' }} to="/login">
        <img className={classes.Nav_Image} src="/images/enter.svg" alt="Login" />
        Login
      </NavLink>
      <NavLink className={classes.Nav_Link} style={{ textDecoration: 'none', color: '#606468' }} to="/dashboard">
        <img className={classes.Nav_Image} src="/images/dashboard.svg" alt="DashBoard" />
        Dashboard
      </NavLink>
    </div>
  </div>
);

export default NavBar;
