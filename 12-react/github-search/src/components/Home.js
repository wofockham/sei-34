import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

export default (props) => {
  const _randomUser = () => {
    const students = ['agoutzas', 'aleksanderbrymora', 'anapgsilva', 'chrskerr', 'jeffreyquan', 'jezzzm', 'JinSeal', 'KCulmo', 'Kian-F', 'phunky-phresh', 'shaneenvitug']
    const username = _(students).sample();
    props.history.push(`/details/${ username }`);
  };

  return (
    <div className="home">
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
      <button onClick={ _randomUser }>Random user</button>
    </div>
  );
};
