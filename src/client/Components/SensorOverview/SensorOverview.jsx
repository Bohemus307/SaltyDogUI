import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import { sensorQuery, alertQuery } from '../../graphql/queries';

import classes from './SensorOverview.css';
import Sensor from '../Sensor/Sensor.jsx';
import DataExport from '../DataExport/DataExport.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Alerts from '../Alerts/Alerts.jsx';

const SensorOverview = ({ id, type, unitOfMeasure }) => {
  const [alerts, setAlerts] = useState({});
  const [alarms, setAlarms] = useState({
    maxAlarm: false,
    minAlarm: false,
  });

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

  const alertHandler = (reading) => {
    const limits = data2.alert;
    // const current = values[0];
    if (alarms.maxAlarm && alarms.minAlarm) {
      return true;
    }
    if (reading > limits.maxsetvalue) {
      console.log('max alarm');
      setAlarms({ ...alarms, maxAlarm: true });
    }
    if (reading < limits.minsetvalue) {
      console.log('min alarm');
      setAlarms({ ...alarms, minAlarm: true });
      return true;
    }
    return false;
  };

  return (
    <div className={classes.Overview}>
      <div className={classes.Sensor_Div}>
        <Sensor
          type={type}
          unitOfMeasure={unitOfMeasure}
          id={id}
          alarmCheck={alertHandler}
        />
      </div>
      <div className={classes.Sensor_Feed}>
        {values.map((item) => (
          (item.reading > data2.alert.maxsetvalue || item.reading < data2.alert.minsetvalue)
            ? (
              <div key={item.reading_id} className={classes.Data_Reading}>
                <span style={{ marginRight: '5%', color: 'red' }}> Sensor Reading: </span>
                <span style={{ marginRight: '5%', color: 'red' }}>
                  (
                  {item.reading}
                  {unitOfMeasure}
                  )
                </span>
                <span style={{ marginRight: '5%', color: 'red' }}>{new Date(parseInt(item.time, 10)).toISOString()}</span>
              </div>
            ) : (
              <div key={item.reading_id} className={classes.Data_Reading}>
                <span style={{ marginRight: '5%' }}> Sensor Reading: </span>
                <span style={{ marginRight: '5%' }}>
                  (
                  {item.reading}
                  {unitOfMeasure}
                  )
                </span>
                <span style={{ marginRight: '5%' }}>{new Date(parseInt(item.time, 10)).toISOString()}</span>
              </div>
            )))}
      </div>
      <DataExport id={id} />
      {(alerts.alert && !loading2) ? (
        <Alerts
          type={type}
          unitOfMeasure={unitOfMeasure}
          maxValue={alerts.alert.maxsetvalue}
          minValue={alerts.alert.minsetvalue}
        />
      ) : <Spinner />}

    </div>
  );
};

SensorOverview.propTypes = {
  type: propTypes.string.isRequired,
  unitOfMeasure: propTypes.string,
  id: propTypes.string.isRequired,
};

SensorOverview.defaultProps = {
  unitOfMeasure: null,
};

export default SensorOverview;
