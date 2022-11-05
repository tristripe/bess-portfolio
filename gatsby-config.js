const path = require(`path`);

module.exports = {
  pathPrefix: `/bess`,
  siteMetadata: {
    siteUrl: "https://www.bess.ru",
    title: "Bess portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    /*    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/locales`,
        name: `locale`,
      },
    },*/
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/sections/Layout.jsx`,
      },
    },
  ],
};
