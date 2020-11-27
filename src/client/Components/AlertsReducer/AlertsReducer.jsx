import React from 'react';
import propTypes from 'prop-types';
import { useMutation, useQuery } from '@apollo/client';
import { createAlert, getAlerts } from '../../graphql/queries.js';

import Alerts from '../Alerts/Alerts.jsx';

const AlertsReducer = () => {
  const [addAlert] = useMutation(createAlert);

  const { loading, error, data } = useQuery(getAlerts);
  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  if (data) {
    console.log(data);
  }

  
  return (
    <Alerts />
  );
};

AlertsReducer.propTypes = {
  name: propTypes.string.isRequired,
};

export default AlertsReducer;
