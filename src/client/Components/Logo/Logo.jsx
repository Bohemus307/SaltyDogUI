import React from 'react';
import propTypes from 'prop-types';

import Aux from '../../Hoc/Aux/Aux.jsx';

const Logo = ({ height }) => (
  <Aux>
    <img style={{ height }} src="/images/heronlogosquare.png" alt="Logo" />
  </Aux>
);

Logo.propTypes = {
  height: propTypes.string.isRequired,
};

export default Logo;
