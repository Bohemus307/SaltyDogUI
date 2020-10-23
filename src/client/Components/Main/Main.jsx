import React from 'react';
import classes from './Main.css';
import Aux from '../../Hoc/Aux/Aux.jsx';

const Main = () => {
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
  
  return (
    <div className={classes.Main}>
      
    </div>
  );
};

export default Main;
