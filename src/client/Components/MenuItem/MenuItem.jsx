import React from 'react';
import propTypes from 'prop-types';

import classes from './MenuItem.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

const MenuItem = ({
  value, image, alt, title, displayItem, click,
}) => {
  const clickBoth = (currentValue) => {
    displayItem(currentValue);
    click(currentValue);
  };

  return (
    <Aux>
      <img value={value} className={classes.Menu_Image} src={image} alt={alt} onClick={() => clickBoth(value)} />
      <span value={value} className={classes.Menu_Span} onClick={() => clickBoth(value)}>
        {' '}
        {title}
        {' '}
      </span>
    </Aux>
  );
};
MenuItem.propTypes = {
  value: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  displayItem: propTypes.func.isRequired,
  click: propTypes.func.isRequired,
};

export default MenuItem;
