// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';
import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import classes from './LineChart.css';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = ({ data, inputChanged }) => {
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
    <div className={classes.Chart_Div}>
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
      <div style={{ marginTop: '20px' }}>
        <span style={{
          color: '#282e33',
          fontWeight: 'bolder',
          float: 'right',
          marginRight: '8.5%',
        }}
        >
          Chart Time Duration
        </span>
        {dropDown}
      </div>
    </div>
  );
};

LineChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      x: propTypes.string,
      y: propTypes.number,
    }),
  ).isRequired,
  inputChanged: propTypes.func.isRequired,
};

export default LineChart;
