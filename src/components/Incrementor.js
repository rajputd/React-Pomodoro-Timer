import React, { Component } from 'react';

class Incrementor extends Component {
  render() {
    const pointerEvents = this.props.changeable ? "auto" : "none";
    return (
      <div>
        <button style={{pointerEvents: pointerEvents}} onClick={this.props.onIncrement}>&uarr;</button>
        {this.props.value}
        <button style={{pointerEvents: pointerEvents}} onClick={this.props.onDecrement}>&darr;</button>
      </div>
    )
  }
}

export default Incrementor;
