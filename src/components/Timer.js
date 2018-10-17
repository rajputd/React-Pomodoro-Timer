import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.defaultLength, //stores time in seconds
      isPaused: true
    };

    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  formatValue(value) {
    let formatted = value.toString();
    if (formatted.length < 2) {
      return "0" + formatted;
    }

    return formatted;
  }

  tick() {
    if (this.state.timeLeft === 0) {
      console.log('timer done');
      return;
    }
    this.setState({timeLeft: this.state.timeLeft - 1});
  }

  handlePlayButtonClick() {
    //set/delete interval based on context
    if (this.state.isPaused) {
      this.intervalID = setInterval(this.tick, 1000);
    } else {
      clearInterval(this.intervalID);
    }

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
