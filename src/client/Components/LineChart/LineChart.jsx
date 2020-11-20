// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

import data from './data.js';
import Aux from '../../Hoc/Aux/Aux.jsx';
import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import classes from './LineChart.css';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = () => {
  const [inputElements, setInputs] = useState({
    chartForm: {
      chartDates: {
        key: 1,
        elementType: 'select',
        elementConfig: {
          options: [
            { pastWeek: 'Past Week', displayValue: 'Past Week' },
            { pastMonth: 'Past Month', displayValue: 'Past Month' },
          ],
          image: '/images/start.svg',
          alt: 'File Type',
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
  });

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

  const chartHandler = () => {
    console.log('exported');
  };

  // const { controls } = inputElements;
  const keys = Object.keys(inputElements.chartForm);
  const values = Object.values(inputElements.chartForm);

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

  let dropDown = (
    <form onSubmit={chartHandler} className={classes.Chart_Form}>
      {inputElementsArray.map((formElement) => (
        <Input
          key={formElement.config.elementType}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => inputChangedHandler(event, formElement.id)}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          label={formElement.config.elementConfig.image}
          alt={formElement.config.elementConfig.alt}
          dropdown
        />
      ))}
      <button type="button" className={classes.Chart_Button} onClick={chartHandler}>Load Chart</button>
    </form>
  );
  if (inputElements.loading) {
    dropDown = <Spinner />;
  }

  return (
    <Aux>
      <ResponsiveLine
        data={data}
        margin={{
          top: 50, right: 110, bottom: 50, left: 60,
        }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Date',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Reading',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'dark2' }}
        pointSize={12}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        enableSlices="x"
        useMesh
        theme={{ textColor: 'white', axis: { legend: { text: { fill: 'white' } } } }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
      {dropDown}
    </Aux>
  );
};

export default MyResponsiveLine;
