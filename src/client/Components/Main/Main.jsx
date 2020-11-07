import React, { useState } from 'react';
import propTypes from 'prop-types';
import classes from './Main.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

import Sensor from '../Sensor/Sensor.jsx';
import SensorOverview from '../SensorOverview/SensorOverview.jsx';
import Alerts from '../Alerts/Alerts.jsx';

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
      type: 'DO',
      unitOfMeasure: 'mg/L',
      connected: false,
      location: 'saltyDog',
    },
  ]);

  const currentSensors = (
    sensors.map((sensor) => (
      <div key={sensor.type} className={classes.Sensor}>
        <Sensor
          id="SJV0-wdOM"
          key={sensor.type}
          type={sensor.type}
          unitOfMeasure={sensor.unitOfMeasure}
        />
      </div>
    ))
  );

  let mainElement = null;

  const overview = (
    <Aux>
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
        <SensorOverview type="Ph" loading={false} unitOfMeasure={null} />
      );
      break;
    case ('EC'):
      mainElement = (
        <SensorOverview type="Ec" loading={false} unitOfMeasure="mS/cm" />
      );
      break;
    case ('DO'):
      mainElement = (
        <SensorOverview type="Do" loading={false} unitOfMeasure="mg/L" />
      );
      break;
    case ('Alerts'):
      mainElement = (
        <div>
          <Alerts />
        </div>
      );
      break;
    default:
      mainElement = overview;
  }

  return (
    <div className={classes.Main}>
      <h2>{displayItem}</h2>
      {mainElement}
    </div>
  );
};

Main.propTypes = {
  displayItem: propTypes.string.isRequired,
};

export default Main;
