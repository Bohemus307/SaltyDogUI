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
  console.log('id', id);

  const { loading, error, data } = useQuery(sensorQuery, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });
  console.log('data:', loading, error, data);
  
  if (loading) {
    return (
      <Spinner />
    );
  }
  if (error) return `Error! ${error.message}`;

  // const { sensor: { readings } } = data;
  console.log('data:', loading, error, data);

  const sensor1 = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
      </div>
      <div className={classes.Sensor_Data}>
        {/* {readings[0].data} */}
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
