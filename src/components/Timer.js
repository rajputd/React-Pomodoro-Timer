import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.defaultLength, //stores time in seconds
      isPaused: true
    };
  }

  formatValue(value) {
    let formatted = value.toString();
    if (formatted.length < 2) {
      return "0" + formatted;
    }

    return formatted;
  }

  render() {
    const timeLeft = this.state.timeLeft;
    const minutesLeft = this.formatValue(parseInt(timeLeft / 60));
    const secondsLeft = this.formatValue(timeLeft % 60);

    return (
      <div>
        <div>{minutesLeft}:{secondsLeft}</div>
        <button>Start/Pause</button>
        <button>restart</button>
      </div>
    );
  }
}

export default Timer;
