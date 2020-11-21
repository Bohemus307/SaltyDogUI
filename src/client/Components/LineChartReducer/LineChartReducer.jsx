import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { weekOfDataQuery } from '../../graphql/queries';
import LineChart from '../LineChart/LineChart.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';

const LineChartReducer = () => {
  const [chartTypes, setCharts] = useState([
    {
      chartType: 'week',
      chartConfig: {
        startDate: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        endDate: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        xValues: [],
        yValues: [],
      },
      loading: false,

    },
    {
      chartType: 'month',
      chartConfig: {
        startDate: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        endDate: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        xValues: [],
        yValues: [],
      },
      loading: false,

    },
  ]);

  const queryMultiple = () => {
    const res1 = useQuery(weekOfDataQuery, {
      variables: { id: 'BJenjRROw' },
    });
    const res2 = useQuery(weekOfDataQuery, {
      variables: { id: 'HJRa-DOuG' },
    });
    const res3 = useQuery(weekOfDataQuery, {
      variables: { id: 'SJV0-wdOM' },
    });

    return [res1, res2, res3];
  };

  const [
    { loading: loading1, data: data1 },
    { loading: loading2, data: data2 },
    { loading: loading3, data: data3 },
  ] = queryMultiple();

  console.log('d1:', data1, 'd2:', data2, 'd3', data3);

  if (loading1 || loading2 || loading3) {
    return <Spinner />;
  }

  const averageCreator = (date) => {
    const filteredDayOfData = data1.sensor.weekOfValues.filter((value) => value.date === date);
    const dayAverage = filteredDayOfData.reduce(
      (total, next) => total + next.reading, 0,
    ) / filteredDayOfData.length;
    return dayAverage.toFixed(2);
  };
  // takes one week of data and creates average
  // for each day in week and return array of days and averages
  const uniqueDates = (array) => [...new Map(array.map((x) => [x.date, x])).values()];
  const unique = uniqueDates(data1.sensor.weekOfValues);

  const averages = unique.map((day) => averageCreator(day.date));
  const days = unique.map((day) => new Date(parseInt(day.date, 10)).toLocaleDateString('en-US', { weekday: 'long' }));

  const chartData = days.map((value, index) => ({ x: value, y: averages[index] }));

  console.log(averages, days, chartData);

  // query for week of data by ID
  // getDayAverage(weekOfValues[0].date);

  return (
    <div>
      <LineChart />
    </div>
  );
};

LineChartReducer.propTypes = {
// name: propTypes.string.isRequired
};

export default LineChartReducer;
