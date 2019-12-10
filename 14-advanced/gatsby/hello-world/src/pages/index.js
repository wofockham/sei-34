import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";

export default () => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Header headerText="Goodbye world!" />
  </div>
);
