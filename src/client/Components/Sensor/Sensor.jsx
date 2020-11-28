import React from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { sensorQuery } from '../../graphql/queries.js';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({
  id, type, unitOfMeasure, alarmCheck,
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
  const sensorinAlarm = (
    <Aux>
      <div className={classes.Sensor_Type}>
        {type}
        :
      </div>
      <div className={classes.Sensor_Alarm}>
        {values[0].reading}
        {unitOfMeasure}
      </div>
    </Aux>
  );
  console.log('ac in sensor', alarmCheck);
  return ((alarmCheck(values[0].reading)) ? sensorinAlarm : sensor1);
};

Sensor.propTypes = {
  type: propTypes.string.isRequired,
  // alarmCheckHandler: propTypes.func,
};

Sensor.proptypes = {
  alarmCheckHandler: null,
};
export default Sensor;
