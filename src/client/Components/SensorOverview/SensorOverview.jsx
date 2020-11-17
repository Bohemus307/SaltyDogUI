import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import { sensorQuery } from '../../graphql/queries';

import classes from './SensorOverview.css';
import Sensor from '../Sensor/Sensor.jsx';
import DataExport from '../DataExport/DataExport.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Alerts from '../Alerts/Alerts.jsx';

export default function SensorOverview({ id, type, unitOfMeasure }) {
  const { loading, error, data } = useQuery(sensorQuery, {
    variables: { id },
    pollInterval: 5000,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (loading === true) {
    return (
      <Spinner />
    );
  }

  const { sensor: { values } } = data;
  console.log(values);
  return (
    <div className={classes.Overview}>
      <div className={classes.Sensor_Div}>
        <Sensor type={type} unitOfMeasure={unitOfMeasure} id="SJV0-wdOM" />
      </div>
      <div className={classes.Sensor_Feed}>
        {values.map((item, index) => (
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
        ))}
      </div>
      <DataExport />
      <h3>Set Alerts</h3>
      <Alerts type={type} />
    </div>
  );
}

SensorOverview.propTypes = {
  type: propTypes.string.isRequired,
  unitOfMeasure: propTypes.string,
  id: propTypes.string.isRequired,
};

SensorOverview.defaultProps = {
  unitOfMeasure: null,
};
