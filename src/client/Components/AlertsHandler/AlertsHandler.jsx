import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useMutation, useLazyQuery } from '@apollo/client';
import { createAlert, alertQuery } from '../../graphql/queries.js';

const AlertsHandler = ({ type, minValue, maxValue }) => {
  const [getAlerts, { called, loading, data }] = useLazyQuery(
    alertQuery,
    { variables: { id: type } },
  );
  if (called && loading) return <p>Loading ...</p>;

  console.log('data: ', data);

  const setAlertsHandler = async () => {
    try {
      await getAlerts();
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button style={{ width: '5%', height: '80%' }} type="button" onClick={setAlertsHandler}>Submit</button>
  );
};

AlertsHandler.propTypes = {
};

AlertsHandler.defaultProps = {
};

export default AlertsHandler;
