import React, { Component } from 'react';

class Incrementor extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <button>&uarr;</button>
        current value
        <button>&darr;</button>
      </div>
    )
  }
}

export default Incrementor;
