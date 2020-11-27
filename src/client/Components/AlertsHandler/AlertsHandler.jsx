import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useMutation, useQuery } from '@apollo/client';
import {
  createAlert, alertQuery, getAlerts, sensorQuery,
} from '../../graphql/queries.js';

const AlertsHandler = ({ sensorType, minValue, maxValue }) => {
  const { loading, error, data } = useQuery(alertQuery, { variables: { id: sensorType } });
  const [updateAlert] = useMutation(createAlert);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  let input;

  return (
    <div key={data.sensor_id}>
      <p>{data.sensor_id}</p>
      <form
        onSubmit={() => {
          console.log(input);
          // updateAlert({ variables: { id: sensorType, input } });
        }}
      >
        <button
          ref={(node) => {
            input = node;
          }}
          type="submit"
        >
          Set Alerts
        </button>
      </form>
    </div>
  );
};

AlertsHandler.propTypes = {
};

AlertsHandler.defaultProps = {
};

export default AlertsHandler;
