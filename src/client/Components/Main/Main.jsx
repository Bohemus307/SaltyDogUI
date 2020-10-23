import React from 'react';
import classes from './Main.css';

const Main = () => {
  return (
    <div className={classes.Main}>
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
    </div>
  );
};

export default Main;
