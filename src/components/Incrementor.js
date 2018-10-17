import React, { Component } from 'react';

class Incrementor extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>&uarr;</button>
        {this.props.value}
        <button onClick={this.props.onDecrement}>&darr;</button>
      </div>
    )
  }
}

export default Incrementor;
