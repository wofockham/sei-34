import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      username: 'coldhead'
    }
  }

  // Proposed: class property syntax: obviates the need for .bind
  _handleChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    // Programmatic navigation
    this.props.history.push(`/details/${ this.state.username }`);
  }

  render() {
    return (
      <div className="search">
        <h2>Search Github by username</h2>
        <form onSubmit={ this._handleSubmit }>
          <label>
            Search:
            <input type="search" value={ this.state.username } onInput={ this._handleChange }/>
          </label>
          <button>Search for { this.state.username }</button>
        </form>
      </div>
    );
  }
}
