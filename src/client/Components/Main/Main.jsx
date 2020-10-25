import React, { useState } from 'react';
import propTypes from 'prop-types';
import classes from './Main.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

import Sensor from '../Sensor/Sensor.jsx';

const Main = ({ displayItem }) => {
  const [sensors, setSensor] = useState([
    {
      type: 'PH',
      unitOfMeasure: null,
      connected: false,
      location: 'saltyDog',
    },
    {
      type: 'EC',
      unitOfMeasure: 'mS/cm',
      connected: false,
      location: 'saltyDog',
    },
    {
      type: 'EC',
      unitOfMeasure: 'mg/L',
      connected: false,
      location: 'saltyDog',
    },
  ]);

  const currentSensors = (
    sensors.map((sensor) => (
      <div className={classes.Sensor}>
        <Sensor type={sensor.type} loading={false} />
      </div>
    ))
  );

  let mainElement = null;

  const overview = (
    <Aux>
      <h2>Overview</h2>
      <div className={classes.Sensor_Wrapper}>
        {currentSensors}
      </div>
      <div className={classes.Data_Wrapper}>
        <div className={classes.Chart}>
          Chart
        </div>
        <div className={classes.Feed}>
          Readings History Feed
        </div>
      </div>
    </Aux>
  );

  switch (displayItem) {
    case ('Overview'):
      mainElement = overview;
      break;
    case ('Ph'):
      mainElement = (
        <div>
          ph sensor
        </div>
      );
      break;
    case ('EC'):
      mainElement = (
        <div>
          EC sensor
        </div>
      );
      break;
    case ('DO'):
      mainElement = (
        <div>
          DO sensor
        </div>
      );
      break;
    case ('Alerts'):
      mainElement = (
        <div>
          Alerts
        </div>
      );
      break;
    default:
      mainElement = overview;
  }

  return (
    <div className={classes.Main}>
      {mainElement}
    </div>
  );
};

Main.propTypes = {
  displayItem: propTypes.string.isRequired,
};

export default Main;
