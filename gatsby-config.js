if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './.env.development'})
}
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
      spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
},
  ],
};
