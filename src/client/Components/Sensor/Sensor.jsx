import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import { sensorQuery } from '../../graphql/queries.js';

import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({
  id, type, unitOfMeasure,
}) => {
  const { loading, error, data } = useQuery(sensorQuery, {
    variables: { id },
    polling: 2000,
  });

  if (loading) {
    return (
      <Spinner />
    );
  }
  if (error) return `Error! ${error.message}`;

  const { sensor: { values } } = data;
  console.log('values: ', values)
  const sensor1 = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
        :
      </div>
      <div className={classes.Sensor_Data}>
        {values[0].reading}
        {unitOfMeasure}
      </div>
    </Aux>
  );
  return (sensor1);
};

Sensor.propTypes = {
  type: propTypes.string.isRequired,
};

export default Sensor;
