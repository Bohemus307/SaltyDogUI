import React, { useState } from 'react';
import propTypes from 'prop-types';

import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import classes from './DataExport.css';

const DataExport = () => {
  const [inputElements, setInputs] = useState(
    {
      exportForm: {
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
            image: '/images/user.svg',
          },
          value: '',
          valid: false,
          validation: {
            required: false,
          },
          touched: false,
        },
      },
      loading: false,
    },
  );
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
  // will export data to csv or json type file needs to open a save as modal
  const exportHandler = () => {
    console.log('exported');
  };

  // const { controls } = inputElements;
  const keys = Object.keys(inputElements.exportForm);
  const values = Object.values(inputElements.exportForm);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedExportForm = {
      ...inputElements.exportForm,
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
  console.log(inputElementsArray);
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
          label={formElement.config.elementConfig.image}
        />
      ))}
      <button type="button" onClick={exportHandler}>Export</button>
    </form>
  );
  if (inputElements.loading) {
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
};

export default DataExport;
