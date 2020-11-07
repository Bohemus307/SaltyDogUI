import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import { sensorQuery, onValueAdded } from '../../graphql/queries';

import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({
  id, type, loading, unitOfMeasure,
}) => {
  // const [currentData, setData] = useState([6.986]);
  const { isloading, error, data } = useQuery(sensorQuery, {
    variables: { id },
    // pollInterval: 500,
  });

  if (isloading) return null;
  if (error) return `Error! ${error}`;

  if (isloading === true) {
    return (
      <Spinner />
    );
  }
  console.log('data', data);

  const sensor = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
      </div>
      <div className={classes.Sensor_Data}>
        {data}
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
