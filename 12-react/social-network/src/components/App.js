import React from 'react';
import Clock from './Clock';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile name="Groucho Marx" age="101" motto="No gods no masters" pic="http://www.fillmurray.com/400/400" />
      <Profile name="Harpo Marx" age="98" motto="" pic="http://www.fillmurray.com/401/400" />
      <Profile name="Chico Marx" age="99" motto="No gods no masters" pic="http://www.fillmurray.com/400/401" />
    </div>
  );
}

export default App;
