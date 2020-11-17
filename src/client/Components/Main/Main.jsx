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
      type: 'PH-1',
      id: 'BJenjRROw',
      unitOfMeasure: null,
      connected: false,
      location: 'salt-water-tank-1',
    },
    {
      type: 'EC-1',
      id: 'HJRa-DOuG',
      unitOfMeasure: 'mS/cm',
      connected: false,
      location: 'salt-water-tank-1',
    },
    {
      type: 'DO-1',
      id: 'SJV0-wdOM',
      unitOfMeasure: 'mg/L',
      connected: false,
      location: 'salt-water-tank-1',
    },
    // {
    //   type: 'Mo',
    //   id: 'AVR0-MODw',
    //   unitOfMeasure: 'VWC',
    //   connected: false,
    //   location: 'farm-row-1',
    // },
  ]);

  const currentSensors = (
    sensors.map((sensor) => (
      <div key={sensor.type} className={classes.Sensor}>
        <Sensor
          id={sensor.id}
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
      <h2>{displayItem}</h2>
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
        <SensorOverview id="BJenjRROw" type="Ph" loading={false} unitOfMeasure={null} />
      );
      break;
    case ('EC'):
      mainElement = (
        <SensorOverview id="HJRa-DOuG" type="Ec" loading={false} unitOfMeasure="mS/cm" />
      );
      break;
    case ('DO'):
      mainElement = (
        <SensorOverview id="SJV0-wdOM" type="Do" loading={false} unitOfMeasure="mg/L" />
      );
      break;
      // case ('Moisture'):
      //   mainElement = (
      //     <SensorOverview id="SJV0-wd" type="Moisture" loading={false} unitOfMeasure="VWC" />
      //   );
      // break;
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
