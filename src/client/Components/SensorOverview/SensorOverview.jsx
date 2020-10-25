import React, { useState } from 'react';
import propTypes from 'prop-types';

import classes from './SensorOverview.css';
import Sensor from '../Sensor/Sensor.jsx';

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
        <Sensor type={type} loading={loading} unitOfMeasure={unitOfMeasure} />
      </div>
      <div className={classes.Sensor_Feed}>
        {feedData.map((item, index) => (
          <div key={index} className={classes.Data_Reading}>
            Current Reading:
            <span>
              (
              {item.value}
              {unitOfMeasure}
              )
            </span>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
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
