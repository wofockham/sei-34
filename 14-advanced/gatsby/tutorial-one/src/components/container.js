import React from "react";
import containerStyles from "./container.module.css";

export default (props) => (
  <div className={containerStyles.container}>
    {props.children}
  </div>
);
