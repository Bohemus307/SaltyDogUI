import React from 'react';
import propTypes from 'prop-types';

import classes from './MenuItem.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

const MenuItem = ({
  value, image, alt, title, click,
}) => (
  <Aux>
    <img value={value} className={classes.Menu_Image} src={image} alt={alt} onClick={click} />
    <span value={value} className={classes.Menu_Span} onClick={() => { click(value); }}>
      {' '}
      {title}
      {' '}
    </span>
  </Aux>
);

MenuItem.propTypes = {
  value: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  click: propTypes.func.isRequired,
};

export default MenuItem;
