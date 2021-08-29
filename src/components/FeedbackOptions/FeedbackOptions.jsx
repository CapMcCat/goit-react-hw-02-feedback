import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {Object.keys(options).map((option) => (
          <button
            type='button'
            className={s.button}
            key={option}
            onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
