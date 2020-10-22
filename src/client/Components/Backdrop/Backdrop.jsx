/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// research best practice in backdrop construction !!!!!!!!!!!!!

import React from 'react';
import propTypes from 'prop-types';
import classes from './backdrop.css';

const Backdrop = ({ show, clicked }) => (
  show ? <div className={classes.Backdrop} onClick={clicked} /> : null
);

Backdrop.propTypes = {
  show: propTypes.bool.isRequired,
  clicked: propTypes.func.isRequired,
};

export default Backdrop;
