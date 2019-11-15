import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: (new Date()).toString() };
  }

  render() {
    return (
      <h1>{ this.state.time }</h1>
    );
  }
};

export default Clock;
