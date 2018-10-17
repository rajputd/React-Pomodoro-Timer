import React, { Component } from 'react';

class Incrementor extends Component {
  render() {
    const pointerEvents = this.props.changeable ? "auto" : "none";
    return (
      <div>
        <button
          id={this.props.id + '-increment'}
          style={{pointerEvents: pointerEvents}}
          onClick={this.props.onIncrement}>
            &uarr;
        </button>
        <p id={this.props.id + '-length'}>{this.props.value}</p>
        <button
          id={this.props.id + '-decrement'}
          style={{pointerEvents: pointerEvents}}
          onClick={this.props.onDecrement}>
            &darr;
        </button>
      </div>
    )
  }
}

export default Incrementor;
