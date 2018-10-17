import React, { Component } from 'react';
import Timer from './Timer.js';
import Incrementor from './Incrementor.js';

class App extends Component {
  render() {
    return (
      <div>
          <h1>Pomodoro Timer</h1>
          <h3>Mode</h3>
          <Timer />
          <span>Work Length: <Incrementor /></span>
          <span>Break Length: <Incrementor /></span>
      </div>
    );
  }
}

export default App;
