import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.defaultLength, //stores time in seconds
      isPaused: true
    };

    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
  }

  formatValue(value) {
    let formatted = value.toString();
    if (formatted.length < 2) {
      return "0" + formatted;
    }

    return formatted;
  }

  handlePlayButtonClick() {
    this.setState({isPaused: !this.state.isPaused});
  }

  render() {
    const timeLeft = this.state.timeLeft;
    const minutesLeft = this.formatValue(parseInt(timeLeft / 60));
    const secondsLeft = this.formatValue(timeLeft % 60);

    const playButtonSymbol = this.state.isPaused ? "Start" : "Pause";
    return (
      <div>
        <div>{minutesLeft}:{secondsLeft}</div>
        <button onClick={this.handlePlayButtonClick}>{playButtonSymbol}</button>
        <button>restart</button>
      </div>
    );
  }
}

export default Timer;
