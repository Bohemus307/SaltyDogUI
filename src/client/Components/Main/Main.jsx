import React, { useState, Suspense } from 'react';
import propTypes from 'prop-types';
import classes from './Main.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

import ErrorBoundary from '../Error Boundary/ErrorBoundary.jsx';
// import Sensor from '../Sensor/Sensor.jsx';
// import SensorOverview from '../SensorOverview/SensorOverview.jsx';
// import LineChartReducer from '../LineChartReducer/LineChartReducer.jsx';
// import PieChartReducer from '../PieChartReducer/PieChartReducer.jsx';

const LineChartReducer = React.lazy(() => import('../LineChartReducer/LineChartReducer.jsx'));
const PieChartReducer = React.lazy(() => import('../PieChartReducer/PieChartReducer.jsx'));
const SensorOverview = React.lazy(() => import('../SensorOverview/SensorOverview.jsx'));
const Sensor = React.lazy(() => import('../Sensor/Sensor.jsx'));

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
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Sensor
              id={sensor.id}
              key={sensor.type}
              type={sensor.type}
              unitOfMeasure={sensor.unitOfMeasure}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    ))
  );

  let mainElement = null;
  const [isMonth, setInterval] = useState(false);

  const lineChartHandler = () => {
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
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <LineChartReducer changeChartDuration={lineChartHandler} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className={classes.Pie_Chart}>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <PieChartReducer />
            </Suspense>
          </ErrorBoundary>
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
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <SensorOverview id="BJenjRROw" type="PH-1" loading={false} unitOfMeasure={null} />
          </Suspense>
        </ErrorBoundary>
      );
      break;
    case ('EC'):
      mainElement = (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <SensorOverview id="HJRa-DOuG" type="EC-1" loading={false} unitOfMeasure="mS/cm" />
          </Suspense>
        </ErrorBoundary>
      );
      break;
    case ('DO'):
      mainElement = (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <SensorOverview id="SJV0-wdOM" type="DO-1" loading={false} unitOfMeasure="mg/L" />
          </Suspense>
        </ErrorBoundary>
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
