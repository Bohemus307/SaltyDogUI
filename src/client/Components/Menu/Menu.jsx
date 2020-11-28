import React, { useState } from 'react';
import {
  Switch, useRouteMatch, NavLink, Link, Route,
} from 'react-router-dom';
import propTypes from 'prop-types';
import classes from './Menu.css';

import MenuItem from '../MenuItem/MenuItem.jsx';
import { logout } from '../Auth/auth.js';

const Menu = ({ displayItem }) => {
  const [menuItems, setMenuItems] = useState([
    {
      key: 'Overview',
      image: '/images/overview.svg',
      alt: 'Overview',
      title: 'Overview',
      clicked: true,
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
    // {
    //   key: 'Moisture',
    //   image: '/images/sensor.svg',
    //   alt: 'Moisture',
    //   title: 'Mo Sensor',
    //   clicked: false,
    // },
  ]);

  const clickHandler = (value) => {
    // check menuitems for true value already
    const newArray = [...menuItems];
    newArray.map((item) => {
      if (item.clicked === true) {
        const newItem = item;
        newItem.clicked = false;
      }
      return newArray;
    });
    const elementsIndex = menuItems.findIndex((element) => element.key === value);
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      clicked: !newArray[elementsIndex].clicked,
    };
    setMenuItems(newArray);
  };
  const { path, url } = useRouteMatch();

  const menu = (
    menuItems.map((item) => (
      <div key={item.key} className={classes.Menu_Item} style={{ backgroundImage: item.clicked ? 'linear-gradient(to left, #00BFFF, #8A2BE2)' : 'none' }}>
        <NavLink to={`${url}/:${item.key}sensor`} className={classes.Menu_Link}>
          <MenuItem
            key={item.key}
            image={item.image}
            alt={item.alt}
            title={item.title}
            value={item.key}
            click={clickHandler}
            displayItem={displayItem}
          />
        </NavLink>
      </div>
    ))
  );

  return (
    <div className={classes.Menu}>
      {menu}
      <div className={classes.Menu_Item} onClick={logout} role="button" onKeyPress={logout} tabIndex={0}>
        <NavLink className={classes.Menu_Link} to="/login">
          <img className={classes.Menu_Image} src="/images/logout.svg" alt="LogOut" />
          <span className={classes.Logout}>Log Out</span>
        </NavLink>
        <Switch>
          <Route path={path} />
          <Route path={`${path}/:sensorId`} />
        </Switch>
      </div>
    </div>
  );
};

Menu.propTypes = {
  displayItem: propTypes.func.isRequired,
};

export default Menu;
