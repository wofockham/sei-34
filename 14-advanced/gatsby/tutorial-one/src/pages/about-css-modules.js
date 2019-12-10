import React from "react";
import styles from "./about-css-modules.module.css";
import Container from "../components/container";

console.log( styles );

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS modules are so hot right now</p>
    <User
      username="Bill Murray"
      avatar="http://www.fillmurray.com/405/405"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <User
      username="William Murray"
      avatar="http://www.fillmurray.com/406/406"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
  </Container>
);
