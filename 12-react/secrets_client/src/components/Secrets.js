import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind(this);

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((result) => {
        this.setState({secrets: result.data});
        setTimeout( fetchSecrets, 4000 ); // recursion
      });
    };

    fetchSecrets();

  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content: content}).then((result) => {
      // spread operator: ...
      this.setState({secrets: [...this.state.secrets, result.data]}); // Avoids mutation
    });

  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <Gallery secrets={ this.state.secrets }/>
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''}); // Clear out the textarea for the next secret.
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    )
  }
}

const Gallery = (props) => {
  return (
    <div>
      { props.secrets.map((s) => <p key={ s.id }>{ s.content }</p>) }
    </div>
  )
};

export default Secrets;
