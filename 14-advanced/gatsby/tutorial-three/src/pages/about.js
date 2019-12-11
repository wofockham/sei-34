import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default (props) => {
  console.log(props);
  return (
    <Layout>
      <h1>About {props.data.site.siteMetadata.title}</h1>
      <p>The most fawning Bill Murray fansite on the internet.</p>
    </Layout>
  );

}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
