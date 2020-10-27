import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import classes from './Alerts.css';

import RangeSlider from '../Slider/Slider.jsx';

const Alerts = () => {
  const [parentVal, setParentVal] = useState(10);

  const sliderValueChanged = useCallback((val) => {
    console.log('NEW VALUE', val);
    setParentVal(val);
  });

  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 100,
      value: parentVal,
      step: 1,
      label: 'Alerts slider',
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal],
  );

  return (
    <div className={classes.Alerts}>
      <h1>
        PARENT VALUE:
        {parentVal}
      </h1>
      <RangeSlider {...sliderProps} classes="additional-css-classes" />
    </div>
  );
};

export default Alerts;
