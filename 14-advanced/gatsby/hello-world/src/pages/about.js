import React from "react";
import Header from "../components/header";

export default () => (
  <div style={{ color: 'limegreen' }}>
    <Header headerText="About Us" />
    <p>This is the about page.</p>
    <img src="http://www.fillmurray.com/400/200" alt="Bill Murray" />
    <img src="https://source.unsplash.com/random/400x200" alt="Something random" />
  </div>
);
