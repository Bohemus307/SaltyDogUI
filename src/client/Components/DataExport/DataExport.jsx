import React, { useState, useRef, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { CSVLink } from 'react-csv';
import { exportDataQuery } from '../../graphql/queries.js';
import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import classes from './DataExport.css';

const DataExport = ({ id }) => {
  const csvLink = useRef();
  const [inputElements, setInputs] = useState(
    {
      start: {
        elementType: 'input',
        elementConfig: {
          type: 'Start',
          placeholder: 'Start Date: 12-12-2020',
          image: '/images/start.svg',
          alt: 'Start Date',
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10,
        },
        valid: false,
        touched: false,
      },
      end: {
        elementType: 'input',
        elementConfig: {
          type: 'End',
          placeholder: 'End Date: 12-12-2020',
          image: '/images/start.svg',
          alt: 'End Date',
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10,
        },
        valid: false,
        touched: false,
      },
      filename: {
        elementType: 'input',
        elementConfig: {
          type: 'filename',
          placeholder: 'File Name: my-file.csv',
          image: '/images/start.svg',
          alt: 'File Name',
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
          image: '/images/csv.svg',
          alt: 'File Type',
        },
        value: '',
        valid: false,
        validation: {
          required: false,
        },
        touched: false,
        active: false,
      },
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
  const [getExportData, { loading, error, data }] = useLazyQuery(exportDataQuery);

  if (loading) {
    return (
      <Spinner />
    );
  }
  if (error) return `Error! ${error.message}`;

  // will export data to csv or json type file needs to open a save as modal
  const exportHandler = async (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in inputElements) {
      formData[formElementIdentifier] = inputElements[formElementIdentifier].value;
    }
    if (formData.start && formData.end) {
      const variables = {
        start: Date.parse(formData.start), end: Date.parse(formData.end), id,
      };
      getExportData({ variables });
    }
  };

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
    <form onSubmit={exportHandler} className={classes.Export_Form}>
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
          alt={formElement.config.elementConfig.alt}
        />
      ))}
      <button type="submit" onClick={exportHandler}>Export</button>
      <div className={classes.CsvLink}>
        {data
          ? (
            <CSVLink
              data={data?.sensor?.exportValues}
              filename={inputElements.filename.value}
              ref={csvLink}
            />
          )
          : undefined}
      </div>
    </form>
  );

  if (inputElements.loading) {
    form = <Spinner />;
  }

  return (
    <div className={classes.Data_Export}>
      <h4>Export Data</h4>
      <div className={classes.Export}>
        {form}
      </div>
    </div>
  );
};

DataExport.propTypes = {
};

export default DataExport;
