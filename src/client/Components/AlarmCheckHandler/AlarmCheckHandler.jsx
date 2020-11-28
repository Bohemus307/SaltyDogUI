import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { alertQuery } from '../../graphql/queries.js';
import Spinner from '../UI/Spinner/Spinner.jsx';

const AlarmCheckHandler = (id, reading) => {
  const [alarms, setAlarms] = useState({
    maxAlarm: false,
    minAlarm: false,
  });
  const { loading, error, data } = useQuery(alertQuery, {
    variables: { id },
  });

  if (loading) {
    return (
      <Spinner />
    );
  }
  if (error) return `Error! ${error.message}`;

  const limits = data.alert;
  // const current = values[0];
  if (alarms.maxAlarm && alarms.minAlarm) {
    return true;
  }
  if (reading > limits.maxsetvalue) {
    console.log('max alarm');
    setAlarms({ ...alarms, maxAlarm: true });
  }
  if (reading < limits.minsetvalue) {
    console.log('min alarm');
    setAlarms({ ...alarms, minAlarm: true });
    return true;
  }
  return false;
};

export default AlarmCheckHandler;
