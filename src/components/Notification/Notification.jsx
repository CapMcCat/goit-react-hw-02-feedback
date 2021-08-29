import React, { Component } from 'react';
import s from './Notification.module.css';

class Notification extends Component {
  render() {
    // const { NotificationMessage } = this.props;
    return <p className={s.notification}>No feedback given</p>;
  }
}

export default Notification;
