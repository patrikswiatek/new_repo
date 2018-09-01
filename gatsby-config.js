require('dotenv').config();

module.exports = {
  siteMetadata: {
      title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
{
    resolve: `gatsby-source-contentful`,
    options: {
        spaceId: `pbrtocrgz17d`,
        accessToken: `33e2d4e9480ad0397cabd9165fc5c1f662ec821a291bdbde640a2eaa23070d5c`,
    },
},
  ],
  // proxy: {
  // prefix: "/api",
  // url: "http://dev-mysite.com",
  // },
};
