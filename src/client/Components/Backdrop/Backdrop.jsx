import React from 'react';
import propTypes from 'prop-types';
import classes from './backdrop.css';

const Backdrop = ({ show, clicked }) => (
  show ? (
    <div
      className={classes.Backdrop}
      onClick={clicked}
      role="button"
      tabIndex="0"
    />
  ) : null
);

Backdrop.propTypes = {
  show: propTypes.bool.isRequired,
  clicked: propTypes.func.isRequired,
};

export default Backdrop;
