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
  const [sliders, setSliders] = useState([
    {
      key: 'phMinSlider',
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'phMin',
      locked: false,
    },
    {
      key: 'phMaxSlider',
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'phMax',
      locked: false,
    },
    {
      key: 'ecMinSlider',
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'ecMin',
      locked: false,
    },
    {
      key: 'ecMaxSlider',
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'ecMax',
      locked: false,
    },
    {
      key: 'doMinSlider',
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'doMin',
      locked: false,
    },
    {
      key: 'doMaxSlider',
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'doMax',
      locked: false,
    },
  ]);

  const sliderValueChanged = useCallback((val) => {
    console.log('NEW VALUE', val);
    // setParentVal(val);
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
  const sliderArray = [...sliders];
  const sliderList = (
    sliderArray.map((slider) => {
      const slideProps = useMemo(
        () => ({
          min: slider.min,
          max: slider.max,
          value: parentVal,
          step: slider.step,
          label: slider.label,
          onChange: (e) => sliderValueChanged(e),
        }),
        [parentVal],
      );
      return <RangeSlider key={slider.value} {...slideProps} />
    })
  );

  console.log(sliderProps)
  return (
    <div className={classes.Alerts}>
      <h1>
        PARENT VALUE:
        {parentVal}
      </h1>
      {/* <RangeSlider {...sliderProps} classes="additional-css-classes" /> */}
      {sliderList}
    </div>
  );
};

export default Alerts;
