import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import { sensorQuery } from '../../graphql/queries';

import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({
  id, type, unitOfMeasure,
}) => {
  const { loading, error, data } = useQuery(sensorQuery, {
    variables: { id },
    // pollInterval: 500,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (loading === true) {
    return (
      <Spinner />
    );
  }
  const { sensor: { readings } } = data;

  console.log(readings[0]);

  const sensor1 = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
      </div>
      <div className={classes.Sensor_Data}>
        {readings[0].data}
        {unitOfMeasure}
      </div>
    </Aux>
  );

  return (
    sensor1
  );
};

Sensor.propTypes = {
  type: propTypes.string.isRequired,
};

export default Sensor;
