import React from 'react';
import { Link } from 'gatsby';

const ListLink = (props) => (
  <li style={{ display: 'inline-block', marginRight: '1em' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default (props) => (
  <div style={{ margin: '3em auto', maxWidth: 650, padding: '0 1em'  }}>
    <header style={{ marginBottom: '1.5em' }}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>My Crazy Site</h3>
      </Link>
      <ul style={{ display: 'inline-block' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {props.children}
  </div>
)
