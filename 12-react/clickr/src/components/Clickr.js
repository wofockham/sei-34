import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };

    this._incrementClicks = this._incrementClicks.bind(this);
  }

  _incrementClicks() {
    // this.state.clicks += 1 // Mutation: doesn't work
    this.setState({clicks: this.state.clicks + 1}); // No mutation
  }

  render() {
    return (
      <button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
    );
  }
}

export default Clickr;
