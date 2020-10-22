import React from 'react';
import classes from './MenuItem.css';

import Aux from '../../Hoc/Aux/Aux.jsx';
import { ProgressPlugin } from 'webpack';

const MenuItem = ({ image, alt, title }) => {
  return (
   <Aux>
     <img className={classes.Menu_Image} src={ image } alt={ alt } />
     <span className={classes.Menu_Span}> {title} </span>
   </Aux>
  );
}

export default MenuItem;
