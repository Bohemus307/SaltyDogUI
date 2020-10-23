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
      clicked: false,
    },
    {
      key: 'Ph',
      image: '/images/sensor.svg',
      alt: 'Ph reading',
      title: 'Ph Sensor',
      clicked: false,
    },
    {
      key: 'EC',
      image: '/images/sensor.svg',
      alt: 'Overview',
      title: 'EC Sensor',
      clicked: false,
    },

    {
      key: 'DO',
      image: '/images/sensor.svg',
      alt: 'dissolvedoxygen',
      title: 'DO Sensor',
      clicked: false,
    },
    {
      key: 'Alerts',
      image: '/images/alert.svg',
      alt: 'Alerts',
      title: 'System Alerts',
    },
  ]);

  const menuClickHandler = (value) => {
    // console.log('clicked menu item', value);
    const elementsIndex = menuItems.findIndex((element) => element.key === value);

    const newMenuItems = [...menuItems];
    newMenuItems[elementsIndex] = {
      ...newMenuItems[elementsIndex],
      clicked: !newMenuItems[elementsIndex].clicked,
    };

    setMenuItems(newMenuItems);

    console.log(menuItems);
  };

  const menu = (
    menuItems.map((item) => (
      <div key={item.key} className={classes.Menu_Item}>
        <MenuItem
          key={item.key}
          image={item.image}
          alt={item.alt}
          title={item.title}
          click={menuClickHandler}
          value={item.key}
          clicked={item.clicked}
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
