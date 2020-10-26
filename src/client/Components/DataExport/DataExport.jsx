import React, { useState } from 'react';
import propTypes from 'prop-types';

import Input from '../UI/Input/Input.jsx';

const DataExport = () => {
  const [inputElements, setInputs] = useState([
    {
      Start: {
        elementType: 'input',
        elementConfig: {
          type: 'Start',
          placeholder: 'Start Date: 12/12/12',
          image: '/images/user.svg',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      End: {
        elementType: 'input',
        elementConfig: {
          type: 'End',
          placeholder: 'End Date: 12/12/12',
          image: '/images/user.svg',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      exportMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: '.CSV', displayValue: 'CSV' },
            { value: 'JSON', displayValue: 'JSON' },
          ],
        },
        value: '',
        valid: false,
        touched: false,
      },
      loading: false,
    },
  ]);
  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  const exportHandler = () => {
    console.log('exported');
  };
  // const { controls } = inputElements;
  const keys = Object.keys(inputElements);
  const values = Object.values(inputElements);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedExportForm = {
      ...inputElements,
    };
    // deeper clone
    const updatedFormELement = {
      ...updatedExportForm[inputIdentifier],
    };
    updatedFormELement.value = event.target.value;
    updatedFormELement.valid = checkValidity(
      updatedFormELement.value,
      updatedFormELement.validation,
    );
    updatedFormELement.touched = true;
    updatedExportForm[inputIdentifier] = updatedFormELement;

    setInputs(updatedExportForm);
  };

  // array of objects from controls in state
  const inputElementsArray = keys.reduce((arr, key, idx) => {
    const object = {
      id: key,
      config: values[idx],
    };
    arr.push(object);
    return arr;
  }, []);

  let form = (
    <form onSubmit={exportHandler}>
      {inputElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => inputChangedHandler(event, formElement.id)}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
        />
      ))}
      <button btnType="Export" clicked={exportHandler}>Export</button>
    </form>
  );
  if (this.state.loading) {
    form = <Spinner />;
  }
  return (
    <div className={classes.ContactData}>
      <h4>Export Data</h4>
      {form}
    </div>
  );
};

DataExport.propTypes = {
  name: propTypes.string.isRequired,
};

export default DataExport;
