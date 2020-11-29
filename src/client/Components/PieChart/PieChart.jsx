import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import propTypes from 'prop-types';

import data from './data.js';
import classes from './PieChart.css';
import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';

const PieChart = () => {
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
          alt: 'Chart Duration',
        },
        value: 'Past Week',
        valid: false,
        validation: {
          required: false,
        },
        touched: false,
      },
    },
    loading: false,
  });

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedExportForm = {
      ...inputElements.chartForm,
    };
    // deeper clone
    const updatedFormELement = {
      ...updatedExportForm[inputIdentifier],
    };
    updatedFormELement.value = event.target.value;
    updatedFormELement.touched = true;
    updatedExportForm[inputIdentifier] = updatedFormELement;
    setInputs({ chartForm: updatedExportForm });
    inputChanged(event.target.value);
  };

  const formElement = inputElements.chartForm;

  let dropDown = (
    <form className={classes.Chart_Form}>
      <Input
        key={formElement.chartDates.elementType}
        elementType={formElement.chartDates.elementType}
        elementConfig={formElement.chartDates.elementConfig}
        value={formElement.chartDates.value}
        changed={(event) => inputChangedHandler(event, 'chartDates')}
        invalid={formElement.chartDates.valid}
        shouldValidate={formElement.chartDates.validation}
        touched={formElement.chartDates.touched}
        label={formElement.chartDates.elementConfig.image}
        alt={formElement.chartDates.elementConfig.alt}
        dropdown
      />
    </form>
  );

  if (inputElements.loading) {
    dropDown = <Spinner />;
  }

  return (
    <div className={classes.Chart_Wrapper}>
      <ResponsivePie
        data={data}
        margin={{
          top: 20, right: 80, bottom: 80, left: 80,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'dark2' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="white"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        theme={{ textColor: 'white', axis: { legend: { text: { fill: 'white' } } } }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
      <div>
        <span style={{
          color: '#282e33',
          fontWeight: 'bolder',
          float: 'right',
          marginRight: '60px',
        }}
        >
          Chart Time Duration
        </span>
        {dropDown}
      </div>
    </div>
  );
};

// PieChart.propTypes = {
//   data: propTypes.arrayOf(
//     propTypes.shape({
//       x: propTypes.string,
//       y: propTypes.number,
//     }),
//   ).isRequired,
//   inputChanged: propTypes.func.isRequired,
// };

export default PieChart;
