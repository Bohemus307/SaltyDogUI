import React from 'react';
import classes from './Main.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

const Main = ({ displayItem }) => {
  console.log(displayItem)
  let mainElement = null;

  const overview = (
    <Aux>
      <h2>Overview</h2>
      <div className={classes.Sensor_Wrapper}>
        <div className={classes.Sensor}>
          Sensor Component
        </div>
        <div className={classes.Sensor}>
          Sensor Component
        </div>
        <div className={classes.Sensor}>
          Sensor Component
        </div>
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

export default Main;
