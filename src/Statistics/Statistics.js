import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <ul className={s.statistics__list}>
      {Object.keys(options).map(option => (
        <li key={option} className={s.statistics__item}>
          {option}: {options[option]}
        </li>
      ))}
      <li className={s.statistics__item}>Total: {total}</li>
      <li className={s.statistics__item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
