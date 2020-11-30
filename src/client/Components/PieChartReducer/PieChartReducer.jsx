import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { sensorQuery, alertQuery } from '../../graphql/queries.js';

import PieChart from '../PieChart/PieChart.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';

const PieChartReducer = () => {
  const [alerts, setAlerts] = useState(
    {
      alert: {
        dateset: '1606521600000',
        maxsetvalue: 7.9,
        minsetvalue: 5.2,
        sensor_id: 'PH-1',
        settingsid: 'aZx-123',
        __typename: 'Alert',
      },
    },
  );
  const [chartData, setChartData] = useState();
  const [currSensor, setCurrSensor] = useState({
    type: 'PH-1',
    id: 'BJenjRROw',
    unitOfMeasure: null,
  });
  const [sensors] = useState([
    {
      type: 'PH-1',
      id: 'BJenjRROw',
      unitOfMeasure: null,
    },
    {
      type: 'EC-1',
      id: 'HJRa-DOuG',
      unitOfMeasure: 'mS/cm',
    },
    {
      type: 'DO-1',
      id: 'SJV0-wdOM',
      unitOfMeasure: 'mg/L',
    },
  ]);

  const rangeFilter = (data) => {
    // filter data 2 for in range
    const inRange = data.sensor.values.filter((item) => {
      if (item.reading >= alerts.alert.minsetvalue && item.reading <= alerts.alert.maxsetvalue) {
        return item;
      }
    });
    const aboveRange = data.sensor.values.filter((item) => {
      if (item.reading > alerts.alert.maxsetvalue) {
        return item;
      }
    });
    const belowRange = data.sensor.values.filter((item) => {
      if (item.reading < alerts.alert.minsetvalue) {
        return item;
      }
    });

    const rangedData = [
      {
        id: 'In Range',
        label: 'In Range',
        value: inRange.length,
        color: 'hsl(359, 70%, 50%)',
      },
      {
        id: 'Above Range',
        label: 'Above Range',
        value: aboveRange.length,
        color: 'hsl(80, 70%, 50%)',
      },
      {
        id: 'Below Range',
        label: 'Below Range',
        value: belowRange.length,
        color: 'hsl(94, 70%, 50%)',
      },
    ];
    setChartData(rangedData);
  };

  const QueryMultiple = () => {
    const res1 = useQuery(alertQuery, { // ph
      variables: { id: currSensor.type },
      onCompleted: (data) => setAlerts(data),
    });
    const res2 = useQuery(sensorQuery, { // ec
      variables: { id: currSensor.id },
      onCompleted: (data) => rangeFilter(data),
    });
    return [res1, res2];
  };

  const [
    { loading: loading1, refetch: refetch1 },
    { loading: loading2, refetch: refetch2 },
  ] = QueryMultiple();

  if (loading1 || loading2) {
    return <Spinner />;
  }

  const inputChangeHandler = (value) => {
    const index = sensors.map((sensor) => sensor.type).indexOf(value);
    if (sensors[index]) {
      setCurrSensor(sensors[index]);
      refetch1({ variables: { id: currSensor.type } });
      refetch2({ variables: { id: currSensor.id } });
    }
  };

  return (
    <div style={{ height: '100%', width: '95%' }}>
      {(chartData) ? <PieChart data={chartData} inputChanged={inputChangeHandler} /> : <Spinner />}
    </div>
  );
};

export default PieChartReducer;
