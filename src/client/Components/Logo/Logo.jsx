import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../Hoc/Aux/Aux.jsx';

const Logo = ({ height }) => (
  <Aux>
    <img style={{ height }} src="/images/heronlogosquare.png" alt="Logo" />
  </Aux>
);

Logo.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Logo;
