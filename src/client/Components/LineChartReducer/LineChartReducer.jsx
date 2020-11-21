import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { weekOfDataQuery } from '../../graphql/queries';
import LineChart from '../LineChart/LineChart.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';

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
    const res1 = useQuery(weekOfDataQuery, { // ph
      variables: { id: 'BJenjRROw' },
    });
    const res2 = useQuery(weekOfDataQuery, { // ec
      variables: { id: 'HJRa-DOuG' },
    });
    const res3 = useQuery(weekOfDataQuery, { // do
      variables: { id: 'SJV0-wdOM' },
    });

    return [res1, res2, res3];
  };

  const [
    { loading: loading1, data: data1 },
    { loading: loading2, data: data2 },
    { loading: loading3, data: data3 },
  ] = queryMultiple();

  if (loading1 || loading2 || loading3) {
    return <Spinner />;
  }
  console.log('data1:', data1);
  const dataCreator = (data) => {
    const averageCreator = (date) => {
      const filteredDayOfData = data.filter((value) => value.date === date);
      const dayAverage = filteredDayOfData.reduce(
        (total, next) => total + next.reading, 0,
      ) / filteredDayOfData.length;
      return dayAverage.toFixed(2);
    };
    // takes one week of data and creates average
    // for each day in week and return array of days and averages
    // const uniqueDates = (array) => [...new Map(array.map((x) => [x.date, x])).values()];
    const unique = [...new Set(data1.sensor.weekOfValues.map((item) => item.date))].sort();
    // const unique = uniqueDates(data1.sensor.weekOfValues);
    const averages = unique.map((day) => averageCreator(day));
    const days = unique.map((day) => new Date(parseInt(day, 10)).toLocaleDateString('en-US', { weekday: 'long' }));
    const uniqueDays = Array.from(new Set(days));
    const chartData = uniqueDays.map((value, index) => (
      { x: value, y: parseFloat(averages[index]) }
    ));

    console.log('u:', unique, 'a:', averages, 'd:', days, 'cd:', chartData);
    return chartData;
  };
  const chartdataPh = dataCreator(data1.sensor.weekOfValues);
  const chartdataEC = dataCreator(data2.sensor.weekOfValues);
  const chartdataDO = dataCreator(data3.sensor.weekOfValues);

  const allChartData = [
    {
      id: 'PH-1',
      color: 'hsl(143, 70%, 50%)',
      data: chartdataPh,
    },
    {
      id: 'EC-1',
      color: 'hsl(65, 70%, 50%)',
      data: chartdataEC,
    },
    {
      id: 'DO-1',
      color: 'hsl(302, 70%, 50%)',
      data: chartdataDO,
    },
  ];
  // query for week of data by ID
  // getDayAverage(weekOfValues[0].date);

  return (
    <Aux>
      <LineChart data={allChartData} />
    </Aux>
  );
};

LineChartReducer.propTypes = {
// name: propTypes.string.isRequired
};

export default LineChartReducer;
