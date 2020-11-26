import React, {
  useCallback,
  useState,
  useMemo,
} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import propTypes from 'prop-types';
import { createAlert, getAlerts } from '../../graphql/queries.js';
import classes from './Alerts.css';
import RangeSlider from '../Slider/Slider.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';

const Alerts = ({ type, unitOfMeasure, currValue }) => {
  const [addAlert] = useMutation(createAlert);
  const [sliders, setSliders] = useState([
    {
      key: 'MinSlider',
      unit: unitOfMeasure,
      divKey: 1,
      min: 0,
      max: 100,
      currValue,
      value: 50,
      step: 1,
      label: ' Min',
      locked: false,
      alarm: false,
    },
    {
      key: 'MaxSlider',
      unit: unitOfMeasure,
      divKey: 2,
      min: 0,
      max: 100,
      currValue,
      value: 50,
      step: 1,
      label: ' Max',
      locked: false,
      alarm: false,
    },
  ]);

  // const { loading, error, data } = useQuery(getAlerts);
  // if (loading) return <Spinner />;
  // if (error) return <p>Error :(</p>;

  // if (data) {
  //   console.log(data);
  // }

  const setAlertHandler = (index) => {
    const newAlert = {
      sensor_id: type,
      settingsid: sliders[index].key,
      setvalue: sliders[index].value,
    };
    addAlert({ variables: { input: { ...newAlert } } });
  };

  const lockSlider = useCallback((label) => {
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
        setAlertHandler(index);
        // run func to set alerts
        break;
      default:
        newSliders[index].locked = false;
    }
    setSliders(newSliders);
  },
  [sliders, setAlertHandler]);

  const sliderValueChanged = useCallback((val, key) => {
    // console.log('NEW VALUE', val, key);
    // change value in sliders based on label and new value
    const index = sliders.map((slider) => slider.label).indexOf(key);
    const newSliders = [...sliders];
    newSliders[index].value = parseFloat(val);
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
            type={type}
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
      <h4>Set Alerts</h4>
      <div className={classes.List_Div}>
        {sliderList}
      </div>
    </div>
  );
};

Alerts.propTypes = {
  type: propTypes.string.isRequired,
  unitOfMeasure: propTypes.string,
  currValue: propTypes.number.isRequired,
};

export default Alerts;
