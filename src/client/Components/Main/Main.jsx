import React, { useState } from 'react';
import propTypes from 'prop-types';
import classes from './Main.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

import Sensor from '../Sensor/Sensor.jsx';
import SensorOverview from '../SensorOverview/SensorOverview.jsx';
import LineChartReducer from '../LineChartReducer/LineChartReducer.jsx';
import PieChartReducer from '../PieChartReducer/PieChartReducer.jsx';

const Main = ({ displayItem }) => {
  const [sensors] = useState([
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
    //   connected: false, // moisture sensor for future
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
  const [isMonth, setInterval] = useState(false);

  const chartHandler = () => {
    if (isMonth) {
      setInterval(false);
      return;
    }
    setInterval(true);
  };

  const overview = (
    <Aux>
      <h2>{displayItem}</h2>
      <div className={classes.Sensor_Wrapper}>
        {currentSensors}
      </div>
      <div className={classes.Chart_Wrapper}>
        <div className={(isMonth) ? classes.Line_Month : classes.Line_Chart}>
          <LineChartReducer changeChartSize={chartHandler} />
        </div>
        <div className={classes.Pie_Chart}>
          <PieChartReducer />
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
        <SensorOverview id="BJenjRROw" type="PH-1" loading={false} unitOfMeasure={null} />
      );
      break;
    case ('EC'):
      mainElement = (
        <SensorOverview id="HJRa-DOuG" type="EC-1" loading={false} unitOfMeasure="mS/cm" />
      );
      break;
    case ('DO'):
      mainElement = (
        <SensorOverview id="SJV0-wdOM" type="DO-1" loading={false} unitOfMeasure="mg/L" />
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
