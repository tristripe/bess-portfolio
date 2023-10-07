import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "../components/gallery";
import Sidebar from "../components/sidebar";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        illustrations: allFile(
          filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "illustrations" } }
        ) {
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
        sketches: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "sketches" } }) {
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
        creatures: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "creatures" } }) {
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
        mixed: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "mixed" } }) {
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
        inktober: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "inktober" } }) {
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
        cards: allFile(filter: { publicURL: { regex: "/(jpg|png)/" }, relativeDirectory: { eq: "cards" } }) {
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
