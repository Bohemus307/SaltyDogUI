import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { sensorQuery, alertQuery } from '../../graphql/queries.js';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Sensor.css';

const Sensor = ({
  id, type, unitOfMeasure,
}) => {
  const [alerts, setAlerts] = useState({});

  const QueryMultiple = () => {
    const res1 = useQuery(sensorQuery, {
      variables: { id },
      pollInterval: 5000,
    });
    const res2 = useQuery(alertQuery, {
      variables: { id: type },
      onCompleted: (data2) => setAlerts(data2),
    });
    return [res1, res2];
  };

  const [
    { loading: loading1, data: data1 },
    { loading: loading2, data: data2 },
  ] = QueryMultiple();

  if (loading1 || loading2) {
    return <Spinner />;
  }

  const { sensor: { values } } = data1;

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
  // return ((alertHandler(values[0].reading)) ? sensorinAlarm : sensor1);
  return (values[0].reading > data2.alert.maxsetvalue || values[0].reading < data2.alert.minsetvalue) ? sensorinAlarm : sensor1;
};

Sensor.propTypes = {
  type: propTypes.string.isRequired,
};

export default Sensor;
