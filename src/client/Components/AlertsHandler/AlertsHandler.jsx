import React from 'react';
import propTypes from 'prop-types';
import { useMutation, useQuery } from '@apollo/client';
import { updateAlert, alertQuery } from '../../graphql/queries.js';

const AlertsHandler = ({ sensorType, minValue, maxValue }) => {
  const { loading, error, data } = useQuery(alertQuery, { variables: { id: sensorType } });
  const [changeAlert] = useMutation(updateAlert);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  const setAlerts = async () => {
    const { maxsetvalue, minsetvalue } = data.alert;
    if (maxsetvalue && minsetvalue) {
      const newAlert = {
        sensor_id: data.alert.sensor_id,
        settingsid: data.alert.settingsid,
        maxsetvalue: maxValue,
        minsetvalue: minValue,
      };
      console.log(newAlert);
      changeAlert({ variables: { input: { ...newAlert } } });
    }
  };

  let input;

  return (
    <div key={data.sensor_id}>
      <p>{data.sensor_id}</p>
      <form>
        <button
          ref={(node) => {
            input = node;
          }}
          type="button"
          onClick={() => setAlerts()}
        >
          Set Alerts
        </button>
      </form>
    </div>
  );
};

AlertsHandler.propTypes = {
  sensorType: propTypes.string.isRequired,
  minValue: propTypes.number.isRequired,
  maxValue: propTypes.number.isRequired,
};

export default AlertsHandler;
