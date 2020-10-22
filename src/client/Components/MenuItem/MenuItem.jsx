import React from 'react';
import classes from './MenuItem.css';

import Aux from '../../Hoc/Aux/Aux.jsx';

const MenuItem = () => {
  return (
   <Aux>
     <img className={classes.Menu_Image} src="/images/overview.svg" alt="Overview" />
     <span className={classes.Menu_Span}>Overview</span>
   </Aux>
  );
}

export default MenuItem;
