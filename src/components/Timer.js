import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>minutesLeft:secondsLeft</div>
        <button>Start/Pause</button>
        <button>restart</button>
      </div>
    );
  }
}

export default Timer;
