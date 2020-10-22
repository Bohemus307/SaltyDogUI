import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import classes from './Menu.css';

import MenuItem from '../MenuItem/MenuItem.jsx';

const Menu = ({ logout }) => {

  return (
    <div  className={classes.Menu}>
      <div className={classes.Menu_Item}>
        <MenuItem />
      </div>
      <div className={classes.Menu_Item}>
        <NavLink className={classes.Menu_Link} to="/login">
          <img className={classes.Menu_Image} src="/images/logout.svg" alt="LogOut" />
          <span className={classes.Logout} onClick={() => logout }>Log Out</span>
        </NavLink>
      </div>
    </div>
  );
}

Menu.propTypes = {
  logout: propTypes.func.isRequired,
};

export default Menu;
