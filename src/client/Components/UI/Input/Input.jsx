import React from 'react';
import propTypes from 'prop-types';

import classes from './Input.css';

const Input = ({
  invalid,
  shouldValidate,
  elementType,
  changed,
  elementConfig,
  value,
  touched,
  label,
  alt,
  dropdown,
}) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement];

  if (invalid && shouldValidate) {
    inputClasses.push(classes.Invalid);
  }

  if (dropdown) {
    inputClasses = [classes.ChartDropdown];
  }

  switch (elementType) {
    case ('input'):
      inputElement = (
        <input
          onChange={changed}
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          onChange={changed}
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          onChange={changed}
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
        >
          {elementConfig.options.map((option) => (
            <option key={option.displayValue} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={changed}
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
        />
      );
  }
  let validationError = null;

  if (invalid && touched) {
    validationError = <p>Please enter a valid value!</p>;
  }
  return (
    <div className={classes.Input_Div}>
      <span className={classes.FormSpan}>
        <img
          className={classes.InputImage}
          src={label}
          alt={alt}
          title={alt}
        />
      </span>
      {inputElement}
      {validationError}
    </div>
  );
};

Input.propTypes = {
  invalid: propTypes.bool.isRequired,
  dropdown: propTypes.bool,
  shouldValidate: propTypes.object.isRequired,
  elementType: propTypes.string.isRequired,
  changed: propTypes.func.isRequired,
  elementConfig: propTypes.object.isRequired,
  value: propTypes.string.isRequired,
  touched: propTypes.bool.isRequired,
  label: propTypes.string.isRequired,
  alt: propTypes.string,
};

Input.defaultProps = {
  alt: 'Input image',
  dropdown: false,
};

export default Input;
