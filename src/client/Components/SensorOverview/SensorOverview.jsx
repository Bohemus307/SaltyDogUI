import React from 'react';
import propTypes from 'prop-types';

import Sensor from '../Sensor/Sensor.jsx';

export default function SensorOverview({ type, loading, unitOfMeasure }) {
  return (
    <div>
      <div>
        <Sensor type={type} loading={loading} unitOfMeasure={unitOfMeasure} />
      </div>
      <div>
        Sensor feed
      </div>
    </div>
  );
}

SensorOverview.propTypes = {
  type: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
  unitOfMeasure: propTypes.string,
};

SensorOverview.defaultProps = {
  unitOfMeasure: null,
};