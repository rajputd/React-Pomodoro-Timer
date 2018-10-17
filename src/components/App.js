import React, { Component } from 'react';
import Timer from './Timer.js';
import Incrementor from './Incrementor.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakTime: false,
      workTimeLength: 25,
      breakTimeLength: 5
    };

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

  render() {
    const defaultLength = (this.state.isBreakTime ? this.state.workTimeLength : this.state.workTimeLength) * 60;
    return (
      <div>
          <h1>Pomodoro Timer</h1>
          <h3>{this.state.isBreakTime ? "Time to relax!" : "Time to work!"}</h3>
          <Timer defaultLength={defaultLength}/>
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
