import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import classes from './Alerts.css';

import RangeSlider from '../Slider/Slider.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';

const Alerts = () => {
  const [parentVal, setParentVal] = useState(50);
  const [sliders, setSliders] = useState([
    {
      key: 'phMinSlider',
      divKey: 1,
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'phMin',
      locked: false,
      alarm: false,
    },
    {
      key: 'phMaxSlider',
      divKey: 2,
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'phMax',
      locked: false,
      alarm: false,
    },
    {
      key: 'ecMinSlider',
      divKey: 3,
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'ecMin',
      locked: false,
      alarm: false,
    },
    {
      key: 'ecMaxSlider',
      divKey: 4,
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'ecMax',
      locked: false,
      alarm: false,
    },
    {
      key: 'doMinSlider',
      divKey: 5,
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'doMin',
      locked: false,
      alarm: false,
    },
    {
      key: 'doMaxSlider',
      divKey: 6,
      min: 0,
      max: 100,
      value: 0,
      step: 1,
      label: 'doMax',
      locked: false,
      alarm: false,
    },
  ]);

  const lockSlider = useCallback((label) => {
    console.log('LOCKED SLIDER', label);
    // setParentVal(val);
  });

  const sliderValueChanged = useCallback((val, key) => {
    console.log('NEW VALUE', val, key);
    // setParentVal(val);
  });

  const sliderList = (
    sliders.map((slider) => {
      const slideProps = useMemo(
        () => ({
          divkey: slider.divKey,
          min: slider.min,
          max: slider.max,
          value: parentVal,
          step: slider.step,
          label: slider.label,
          onChange: (e, key) => sliderValueChanged(e, key),
        }),
        [parentVal],
      );
      return (
        <div className={classes.Value_Div} key={slideProps.divkey}>
          <RangeSlider classes={classes.Slider} key={slider.label} {...slideProps} />
          <button
            aria-label="lock slider"
            className={classes.Lock_Button}
            style={{
              backgroundImage: 'url( /images/padlock.svg )',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
            type="button"
            name="Lock"
            onClick={() => lockSlider(slideProps.label)}
          />
        </div>
      );
    })
  );

  return (
    <div className={classes.Alerts}>
      {sliderList}
    </div>
  );
};

export default Alerts;
