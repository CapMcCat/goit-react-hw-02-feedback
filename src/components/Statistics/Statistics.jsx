import React, { Component } from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p className={s.stat}>Good: {good}</p>
        <p className={s.stat}>Neutral: {neutral}</p>
        <p className={s.stat}>Bad: {bad}</p>
        <p className={s.stat}>Total: {total}</p>
        <p className={s.stat}>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
