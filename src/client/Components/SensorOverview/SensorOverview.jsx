import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import { sensorQuery } from '../../graphql/queries';

import classes from './SensorOverview.css';
import Sensor from '../Sensor/Sensor.jsx';
import DataExport from '../DataExport/DataExport.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';

export default function SensorOverview({ id, type, unitOfMeasure }) {

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

  return (
    <div className={classes.Overview}>
      <div className={classes.Sensor_Div}>
        <Sensor type={type} unitOfMeasure={unitOfMeasure} id="SJV0-wdOM" />
      </div>
      <div className={classes.Sensor_Feed}>
        {readings.map((item, index) => (
          <div key={index} className={classes.Data_Reading}>
            <span style={{ marginRight: '5%' }}> Current Reading: </span>
            <span style={{ marginRight: '5%' }}>
              (
              {item.data}
              {unitOfMeasure}
              )
            </span>
            <span style={{ marginRight: '5%' }}>{item.time}</span>
          </div>
        ))}
      </div>
      <DataExport />
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
