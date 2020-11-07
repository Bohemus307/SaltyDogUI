import React, { useState } from 'react';
import propTypes from 'prop-types';

import classes from './SensorOverview.css';
import Sensor from '../Sensor/Sensor.jsx';
import DataExport from '../DataExport/DataExport.jsx';

export default function SensorOverview({ type, loading, unitOfMeasure }) {
  const [feedData, setFeedData] = useState([
    {
      value: 6,
      time: new Date().toISOString(),
      UOM: unitOfMeasure,
    },
    {
      value: 7,
      time: new Date().toISOString(),
      UOM: unitOfMeasure,
    },
    {
      value: 6,
      time: new Date().toISOString(),
      UOM: unitOfMeasure,
    },
    {
      value: 5,
      time: new Date().toISOString(),
      UOM: unitOfMeasure,
    },
    {
      value: 6,
      time: new Date().toISOString(),
      UOM: unitOfMeasure,
    },
    {
      value: 7,
      time: new Date().toISOString(),
      UOM: unitOfMeasure,
    },
  ]);
  return (
    <div className={classes.Overview}>
      <div className={classes.Sensor_Div}>
        <Sensor type={type} loading={loading} unitOfMeasure={unitOfMeasure} id="SJV0-wdOM" />
      </div>
      <div className={classes.Sensor_Feed}>
        {feedData.map((item, index) => (
          <div key={index} className={classes.Data_Reading}>
            <span style={{ marginRight: '5%' }}> Current Reading: </span>
            <span style={{ marginRight: '5%' }}>
              (
              {item.value}
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
  loading: propTypes.bool.isRequired,
  unitOfMeasure: propTypes.string,
};

SensorOverview.defaultProps = {
  unitOfMeasure: null,
};
