import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
  }

  formatValue(value) {
    let formatted = value.toString();
    if (formatted.length < 2) {
      return "0" + formatted;
    }

    return formatted;
  }
  render() {
    const timeLeft = this.props.timeLeft;
    const minutesLeft = this.formatValue(parseInt(timeLeft / 60));
    const secondsLeft = this.formatValue(timeLeft % 60);
    const playButtonSymbol = this.props.isPaused ? "Start" : "Pause";

    return (
      <div>
        <div>{minutesLeft}:{secondsLeft}</div>
        <button onClick={this.props.onPlayButtonClick}>{playButtonSymbol}</button>
        <button onClick={this.props.onResetButtonClick}>restart</button>
      </div>
    );
  }
}

export default Timer;
