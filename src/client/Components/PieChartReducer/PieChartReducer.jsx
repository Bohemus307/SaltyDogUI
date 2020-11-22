import React, { useState } from 'react';
// import propTypes from 'prop-types';
import PieChart from '../PieChart/PieChart.jsx';

const PieChartReducer = () => {
  const [chartDuration, setDuration] = useState('Past Week');

  return (
    <div style={{ height: '100%', width: '95%' }}>
      <PieChart duration={chartDuration} />
    </div>
  );
};

// PieChartReducer.propTypes = {
// name: propTypes.string.isRequired
// };

export default PieChartReducer;
