import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <ul className="statistics-list">
      {Object.keys(options).map(option => (
        <li key={option} className="statistics-item">
          {option}: {options[option]}
        </li>
      ))}
      <li className="statistics-item">Total: {total}</li>
      <li className="statistics-item">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
