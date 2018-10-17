import React, { Component } from 'react';
import Timer from './Timer.js';
import Incrementor from './Incrementor.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakTime: false,
      workTimeLength: 25,
      breakTimeLength: 5,
      timeLeft: 25 * 60,
      isPaused: true
    };

    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  incrementLength(lengthName) {
    let newState = {};
    newState[lengthName] = this.state[lengthName] + 1;
    this.setState(newState);
  }

  decrementLength(lengthName) {
    let newState = {};

    //do not let length drop below zero
    if (this.state[lengthName] > 0) {
        newState[lengthName] = this.state[lengthName] - 1;
    }

    this.setState(newState);
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

  handleResetButtonClick() {
    //clear interval if timer is still running
    if (!this.state.isPaused) {
      clearInterval(this.intervalID);
    }
    const newTimeLeft = this.state.isBreakTime ? this.state.breakTimeLength : this.state.workTimeLength;
    this.setState({timeLeft: newTimeLeft * 60, isPaused: true});
  }

  render() {
    return (
      <div>
          <h1>Pomodoro Timer</h1>
          <h3>{this.state.isBreakTime ? "Time to relax!" : "Time to work!"}</h3>
          <Timer
            timeLeft={this.state.timeLeft}
            isPaused={this.state.isPaused}
            onPlayButtonClick={this.handlePlayButtonClick}
            onResetButtonClick={this.handleResetButtonClick}/>
          <span>
            Work Length:
           <Incrementor
            value={this.state.workTimeLength}
            onIncrement={this.incrementLength.bind(this, 'workTimeLength')}
            onDecrement={this.decrementLength.bind(this, 'workTimeLength')}
            />
          </span>
          <span>
            Break Length:
            <Incrementor
              value={this.state.breakTimeLength}
              onIncrement={this.incrementLength.bind(this, 'breakTimeLength')}
              onDecrement={this.decrementLength.bind(this, 'breakTimeLength')}
              />
          </span>
      </div>
    );
  }
}

export default App;
