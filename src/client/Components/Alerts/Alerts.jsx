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
      value: 50,
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
      value: 50,
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
      value: 50,
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
      value: 50,
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
      value: 50,
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
      value: 50,
      step: 1,
      label: 'doMax',
      locked: false,
      alarm: false,
    },
  ]);

  const lockSlider = useCallback((label) => {
    // console.log('LOCKED SLIDER', label);
    // get index of item with key = label
    const index = sliders.map((slider) => slider.label).indexOf(label);
    const expr = sliders[index].locked;
    const newSliders = [...sliders];
    // swtich for true false
    switch (expr) {
      case true:
        newSliders[index].locked = false;
        break;
      case false:
        newSliders[index].locked = true;
        break;
      default:
        console.log('lock must be broken');
    }
    setSliders(newSliders);
  },
  [sliders]);

  const sliderValueChanged = useCallback((val, key) => {
    // console.log('NEW VALUE', val, key);
    // change value in sliders based on label and new value
    const index = sliders.map((slider) => slider.label).indexOf(key);
    const newSliders = [...sliders];
    newSliders[index].value = val;
    setSliders(newSliders);
  });

  const sliderList = (
    sliders.map((slider) => {
      const slideProps = useMemo(
        () => ({
          divkey: slider.divKey,
          min: slider.min,
          max: slider.max,
          value: slider.value,
          step: slider.step,
          label: slider.label,
          onChange: (e, key) => sliderValueChanged(e, key),
        }),
        [sliders],
      );
      return (
        <div className={classes.Value_Div} key={slideProps.divkey}>
          <RangeSlider
            classes={classes.Slider}
            key={slider.label}
            {...slideProps}
            disabled={slider.locked}
          />
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
