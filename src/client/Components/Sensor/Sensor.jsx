import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { loadSensorData, onValueAdded } from '../../graphql/queries';

import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({ type, loading, unitOfMeasure }) => {
  const [currentData, setData] = useState([6.986]);
  subscription = null;

  if (loading === true) {
    return (
      <Spinner />
    );
  }

  useEffect(() => {
    const id = 'HJRa-DOuG';
    const values = loadSensorData();
    setData([...values]);
    this.subscription = onValueAdded((value) => {
      setData([...currentData.concat(value)]);
    });
    return () => {
      this.subscription.unsubscribe();
    };
  });

  const sensor = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
      </div>
      <div className={classes.Sensor_Data}>
        {currentData}
        {unitOfMeasure}
      </div>
    </Aux>
  );
  return (
    sensor
  );
};
Sensor.propTypes = {
  type: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
};
export default Sensor;
