import React from 'react';
import propTypes from 'prop-types';

import classes from './Input.css';
import Aux from '../../../Hoc/Aux/Aux.jsx';

const Input = ({
  invalid,
  shouldValidate,
  elementType,
  changed,
  elementConfig,
  value,
  touched,
  label,
}) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (invalid && shouldValidate) {
    inputClasses.push(classes.Invalid);
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
          value={value}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
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
    <Aux>
      <span className={classes.FormSpan}>
        <img className={classes.InputImage} src={label} alt="username" title="username" />
      </span>
      {inputElement}
      {validationError}
    </Aux>
  );
};

Input.propTypes = {
  invalid: propTypes.bool.isRequired,
  shouldValidate: propTypes.object.isRequired,
  elementType: propTypes.string.isRequired,
  changed: propTypes.func.isRequired,
  elementConfig: propTypes.object.isRequired,
  value: propTypes.string.isRequired,
  touched: propTypes.bool.isRequired,
  label: propTypes.string.isRequired,
};

export default Input;
