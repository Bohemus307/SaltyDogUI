import React from 'react';
import PropTypes from 'prop-types';

import classes from './Logo.css';

const Logo = ({ height }) => (
  <div className={classes.Logo}>
    <img className={classes.Logo_Image} style={{ height }} src="/images/heronlogosquare.png" alt="Logo" />
  </div>
);

Logo.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Logo;
