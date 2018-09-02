require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
      spaceId: `qcxow5uej8fm`,
      accessToken: `693c142e47247234a0c41804d83ca45c1d3ccf17523379f08c3801f015dd735f`,
    },
},
  ],
};
