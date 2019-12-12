import React, { Component } from 'react';
import Github from '../utils';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      repos: null
    }
  }

  // Component Life Cycle
  componentDidMount() {
    const { username } = this.props.match.params;

    Github.getUserInfo(username).then(( {data} ) => {
      this.setState({user: data});
    });

    Github.getUserRepos(username).then(( {data} ) => {
      this.setState({repos: data});
    });
  }

  render() {
    return (
      <div className="profile">
        <h1>{this.props.match.params.username}'s Profile</h1>
        <UserInfo user={ this.state.user } />
        <Repositories repos={ this.state.repos } />
      </div>
    );
  }
}

const UserInfo = (props) => {
  if (props.user === null) {
    return (<div className="info">Loading...</div>);
  }

  const { login, followers, following, public_repos, public_gists } = props.user;

  return (
    <div className="info">
      <h3>Stats for { login }</h3>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Repos: { public_repos }</p>
      <p>Gists: { public_gists }</p>
    </div>
  );
};

const Repositories = (props) => {
  if (props.repos === null) {
    return (<div className="repos">Loading...</div>);
  }

  const userRepos = props.repos.map((r) => (
    <li key={ r.id }>
      <a href={ r.html_url } target="_blank">
        { r.name }
      </a>
    </li>
  ));

  return (
    <div className="repos">
      <h3>User Repositories</h3>
      <ul>
        { userRepos }
      </ul>
    </div>
  );
};
