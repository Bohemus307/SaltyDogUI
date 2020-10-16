import React from 'react';

import classes from './Logo.css';
import HeronLogo from '../../../../public/images/heronlogosquare.png';

const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={HeronLogo} alt="My Burger" />
  </div>
);

export default Logo;