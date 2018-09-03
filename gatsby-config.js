require("dotenv").config({
  path: `.env.${process.env.CONTENTFUL_SPACE_ID}`,
});
require("dotenv").config({
  path: `.env.${process.env.CONTENTFUL_ACCESS_TOKEN}`,
});
require("dotenv").config({
  path: `.env.${process.env.CONTENTFUL_BASE_URI}`,
});


module.exports = {
  siteMetadata: {
      title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    `gatsby-transformer-json`,
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
      accessToken: `c4b715c4a90a3a855eb87bf210c9087547c11a77849276cff01ab99c9ac37f16`,
      host: `preview.contentful.com`
      },
    },
  ],
}
