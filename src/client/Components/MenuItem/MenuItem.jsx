import React from 'react';
import classes from './MenuItem.css';

import Aux from '../../Hoc/Aux/Aux.jsx';
import { ProgressPlugin } from 'webpack';

const MenuItem = ({ value, image, alt, title, click }) => {
  return (
   <Aux>
     <img value={ value } className={classes.Menu_Image} src={ image } alt={ alt } onClick={ click } />
     <span value={ value } className={classes.Menu_Span} onClick={() => click( value ) }> {title} </span>
   </Aux>
  );
}

export default MenuItem;
