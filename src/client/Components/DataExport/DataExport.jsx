import React, { useState, useRef, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CSVLink } from 'react-csv';
import { exportDataQuery } from '../../graphql/queries.js';
import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import classes from './DataExport.css';

const DataExport = ({ id }) => {
  const [exportData, setData] = useState([]);
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
          image: '/images/document.svg',
          alt: 'File Name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
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

  const asyncExport = async (asyncData) => {
    try {
      await setData(asyncData.sensor.exportValues);
      const click = await csvLink.current.link.click();
      return click;
    } catch (err) { console.log(err); }
  };

  const [getExportData, { loading, error, data }] = useLazyQuery(exportDataQuery,
    {
      onCompleted: () => asyncExport(data),
    });

  if (loading) {
    return (
      <Spinner />
    );
  }
  if (error) return `Error! ${error.message}`;

  if (data) {
    console.log('csvdata: ', data?.sensor?.exportValues);
  }

  const exportHandler = (event) => {
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
      <button type="submit" onClick={exportHandler} disabled={!inputElements.valid}>Export</button>
      <CSVLink
        data={exportData}
        filename={inputElements.filename.value}
        ref={csvLink}
        className="hidden"
      />
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
