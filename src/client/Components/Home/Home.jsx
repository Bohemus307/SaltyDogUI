import React from 'react';

import classes from './Home.css';
import Logo from '../Logo/Logo.jsx';

function Home() {
  return (
    <div className={classes.Home_Div}>
      <div>
        <Logo height="300px" />
      </div>
      <div className={classes.Text_Div}>
        <img src="/images/HeronLogoLarge.png" alt="logo" />
      </div>
    </div>
  );
}

export default Home;
