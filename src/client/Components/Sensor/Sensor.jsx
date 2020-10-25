import React, { useState } from 'react';
import propTypes from 'prop-types';

import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({ type, loading }) => {
  const [currentData, setData] = useState(6.986);

  if (loading === true) {
    return (
      <Spinner />
    );
  }

  const sensor = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
      </div>
      <div className={classes.Sensor_Data}>
        {currentData}
      </div>
    </Aux>
  );
  return (
    <div>
      {sensor}
    </div>
  );
};
Sensor.propTypes = {
  type: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
};
export default Sensor;
