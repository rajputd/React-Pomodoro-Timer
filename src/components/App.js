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
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timerDone = this.timerDone.bind(this);
    this.playBeep = this.playBeep.bind(this);
  }

  componentDidMount() {
    this.beep = document.getElementById("beep");
  }

  playBeep() {
    this.beep.play();
  }


  incrementLength(lengthName) {
    let newState = {};

    //do not let users set a length greater than 60
    if (this.state[lengthName] < 60) {
      newState[lengthName] = this.state[lengthName] + 1;
    }

    this.setState(newState, this.resetTimer);
  }

  decrementLength(lengthName) {
    let newState = {};

    //do not let length drop below one
    if (this.state[lengthName] > 1) {
      newState[lengthName] = this.state[lengthName] - 1;
    }

    this.setState(newState, this.resetTimer);
  }

  startTimer() {
    this.intervalID = setInterval(this.tick, 1000);
    this.setState({isPaused: false});
  }

  pauseTimer() {
    clearInterval(this.intervalID);
    this.setState({isPaused: true});
  }

  resetTimer() {
    //clear interval if timer is still running
    if (!this.state.isPaused) {
      this.pauseTimer();
    }

    //set timer back to starting value
    const newTimeLeft = this.state.isBreakTime ? this.state.breakTimeLength : this.state.workTimeLength;
    this.setState({timeLeft: newTimeLeft * 60});
  }

  timerDone() {
    this.setState({isBreakTime: !this.state.isBreakTime}, () => {
        this.playBeep();
        this.resetTimer();
        this.startTimer();
    });
  }

  tick() {
    if (this.state.timeLeft === 0) {
      this.timerDone();
      return;
    }
    this.setState({timeLeft: this.state.timeLeft - 1});
  }

  handlePlayButtonClick() {
    if (this.state.isPaused) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  handleResetButtonClick() {
    this.setState({breakTimeLength: 5, workTimeLength: 25}, this.resetTimer);
  }

  render() {
    const pointerEvents = this.state.isPaused ? 'auto' : 'none';
    return (
      <div>
          <h1>Pomodoro Timer</h1>
          <h3 id="timer-label">{this.state.isBreakTime ? "Time to relax!" : "Time to work!"}</h3>
          <Timer
            timeLeft={this.state.timeLeft}
            isPaused={this.state.isPaused}
            onPlayButtonClick={this.handlePlayButtonClick}
            onResetButtonClick={this.handleResetButtonClick}/>
          <span id="session-label">
            Work Length:
           <Incrementor
            id="session"
            changeable={this.state.isPaused}
            value={this.state.workTimeLength}
            onIncrement={this.incrementLength.bind(this, 'workTimeLength')}
            onDecrement={this.decrementLength.bind(this, 'workTimeLength')}
            />
          </span>
          <span id="break-label">
            Break Length:
            <Incrementor
              id="break"
              changeable={this.state.isPaused}
              value={this.state.breakTimeLength}
              onIncrement={this.incrementLength.bind(this, 'breakTimeLength')}
              onDecrement={this.decrementLength.bind(this, 'breakTimeLength')}
              />
          </span>
          <audio id="beep">
            <source
              src="http://www.orangefreesounds.com/wp-content/uploads/2017/11/Short-beep-noise.mp3"
              type="audio/mpeg" />
          </audio>
      </div>
    );
  }
}

export default App;
