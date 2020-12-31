import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { weekOfDataQuery, monthOfDataQuery } from '../../graphql/queries';
import LineChart from '../LineChart/LineChart.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';
import Aux from '../../Hoc/Aux/Aux.jsx';

const LineChartReducer = ({ changeChartDuration }) => {
  const [chartDuration, setDuration] = useState('Past Week');
  const QueryMultiple = () => {
    const res1 = useQuery(weekOfDataQuery, { // ph
      variables: { id: 'BJenjRROw' },
      skip: false,
    });
    const res2 = useQuery(weekOfDataQuery, { // ec
      variables: { id: 'HJRa-DOuG' },
      skip: false,
    });
    const res3 = useQuery(weekOfDataQuery, { // do
      variables: { id: 'SJV0-wdOM' },
      skip: false,
    });
    const res4 = useQuery(monthOfDataQuery, { // ph
      variables: { id: 'BJenjRROw' },
      skip: false,
    });
    const res5 = useQuery(monthOfDataQuery, { // ec
      variables: { id: 'HJRa-DOuG' },
      skip: false,
    });
    const res6 = useQuery(monthOfDataQuery, { // do
      variables: { id: 'SJV0-wdOM' },
      skip: false,
    });

    return [res1, res2, res3, res4, res5, res6];
  };

  const [
    { loading: loading1, data: data1 },
    { loading: loading2, data: data2 },
    { loading: loading3, data: data3 },
    { loading: loading4, data: data4 },
    { loading: loading5, data: data5 },
    { loading: loading6, data: data6 },
  ] = QueryMultiple();

  if (loading1 || loading2 || loading3 || loading4 || loading5 || loading6) {
    return <Spinner />;
  }
  // creates object for chart to render
  const dataCreator = (data) => {
    const averageCreator = (date) => {
      const filteredDayOfData = data.filter((value) => value.date === date);
      const dayAverage = filteredDayOfData.reduce(
        (total, next) => total + next.reading, 0,
      ) / filteredDayOfData.length;
      return dayAverage.toFixed(2);
    };
    const unique = [...new Set(data.map((item) => item.date))].sort();
    // const unique = uniqueDates(data1.sensor.weekOfValues);
    const averages = unique.map((day) => averageCreator(day));
    const days = unique.map((day) => new Date(parseInt(day, 10)).toISOString().substring(5, 10));
    const uniqueDays = Array.from(new Set(days));
    const chartData = uniqueDays.map((value, index) => (
      { x: value, y: parseFloat(averages[index]) }
    ));
    return chartData;
  };

  const chartdataPh = dataCreator(data1.sensor.weekOfValues);
  const chartdataEC = dataCreator(data2.sensor.weekOfValues);
  const chartdataDO = dataCreator(data3.sensor.weekOfValues);
  const chartdataMonthPh = dataCreator(data4.sensor.monthOfValues);
  const chartdataMonthEC = dataCreator(data5.sensor.monthOfValues);
  const chartdataMonthDO = dataCreator(data6.sensor.monthOfValues);

  const allChartData = [
    {
      id: 'PH-1',
      color: 'hsl(143, 70%, 50%)',
      data: (chartDuration === 'Past Week') ? chartdataPh : chartdataMonthPh,
    },
    {
      id: 'EC-1',
      color: 'hsl(65, 70%, 50%)',
      data: (chartDuration === 'Past Week') ? chartdataEC : chartdataMonthEC,
    },
    {
      id: 'DO-1',
      color: 'hsl(302, 70%, 50%)',
      data: (chartDuration === 'Past Week') ? chartdataDO : chartdataMonthDO,
    },
  ];

  const inputChangeHandler = (value) => {
    if (value === 'Past Month') {
      setDuration('Past Month');
      changeChartDuration();
      return;
    }
    setDuration('Past Week');
    changeChartDuration();
  };
  return (
    <Aux>
      <LineChart data={allChartData} inputChanged={inputChangeHandler} />
    </Aux>
  );
};

LineChartReducer.propTypes = {
  changeChartDuration: propTypes.func.isRequired,
};

export default LineChartReducer;
