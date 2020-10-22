import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import classes from './Menu.css';

import MenuItem from '../MenuItem/MenuItem.jsx';

const Menu = ({ logout }) => {
  const [menuItems, setMenuItems] = useState([
    {
      key: 'Overview',
      image: '/images/overview.svg',
      alt: 'Overview',
      title: 'Overview',
    },
    {
      key: 'Ph',
      image: '/images/sensor.svg',
      alt: 'Ph reading',
      title: 'Ph Sensor',
    },
    {
      key: 'EC',
      image: '/images/sensor.svg',
      alt: 'Overview',
      title: 'EC Sensor',
    },

    {
      key: 'DO',
      image: '/images/sensor.svg',
      alt: 'dissolvedoxygen',
      title: 'DO Sensor',
    },
    {
      key: 'Alerts',
      image: '/images/alert.svg',
      alt: 'Alerts',
      title: 'System Alerts',
    },
  ]);

  const menu = (
    menuItems.map((item) => (
      <div key={item.key} className={classes.Menu_Item}>
        <MenuItem
          key={item.key}
          image={item.image}
          alt={item.alt}
          title={item.title}
        />
      </div>
    ))
  );

  return (
    <div className={classes.Menu}>
      {menu}
      <div className={classes.Menu_Item}>
        <NavLink className={classes.Menu_Link} to="/login">
          <img className={classes.Menu_Image} src="/images/logout.svg" alt="LogOut" />
          <span className={classes.Logout}>Log Out</span>
        </NavLink>
      </div>
    </div>
  );
};

Menu.propTypes = {
  logout: propTypes.func.isRequired,
};

export default Menu;
