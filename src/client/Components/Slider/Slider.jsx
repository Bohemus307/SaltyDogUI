/* eslint-disable max-len */
import React, {
  memo,
  useState,
  useEffect,
} from 'react';
import propTypes from 'prop-types';

// destructive props
const RangeSlider = ({
  classes, label, onChange, value, ...sliderProps
}) => {
  // set initial value to 0 this will change inside useEffect in first render also | or you can directly set useState(value)
  const [sliderVal, setSliderVal] = useState(0);

  // keep mouse state to determine whether i should call parent onChange or not.
  // so basically after dragging the slider and then release the mouse then we will call the parent onChange, otherwise parent function will get call each and every change
  const [mouseState, setMouseState] = useState(null);

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);

  const getProgressStyle = () => {
    const { minVal, maxVal } = this.props;
    const { currentMin, currentMax } = this.state;

    const low = Math.round(100 * ((currentMin - min) / (max - min))) - 0.5;
    const high = Math.round(100 * ((currentMax - min) / (max - min))) + 0.5;

    return {
      '--low': `${low}%`,
      '--high': `${high}%`,
    };
  };

  useEffect(() => {
    setSliderVal(value); // set new value when value gets changed, even when first render
  }, [value]);

  const changeCallback = (e) => {
    setSliderVal(e.target.value); // update local state of the value when changing
  };

  useEffect(() => {
    if (mouseState === 'up') {
      onChange(sliderVal);// when mouse is up then call the parent onChange
    }
  }, [mouseState]);

  return (
    <div className="range-slider">
      <p>{label}</p>
      <h3>
        value:
        { sliderVal }
      </h3>
      <input
        type="range"
        value={sliderVal}
        {...sliderProps}
        className={`slider ${classes}`}
        id="myRange"
        onChange={changeCallback}
        onMouseDown={() => setMouseState('down')} // When mouse down set the mouseState to 'down'
        onMouseUp={() => setMouseState('up')}
      />
    </div>
  );
};

export default memo(RangeSlider);
