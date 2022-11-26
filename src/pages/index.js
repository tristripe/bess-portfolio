import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "../components/gallery";
import Sidebar from "../components/sidebar";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        currYear: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "2022" } }) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 1400) {
                  src
                }
              }
            }
          }
        }
        prevYear: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "2021" } }) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 1400) {
                  src
                }
              }
            }
          }
        }
      }
    `,
  );
  return (
    <>
      <Sidebar />
      <Gallery data={data} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Галерея</title>;
