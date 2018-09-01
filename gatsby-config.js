require('dotenv').config();

const generateBabelConfig = require("gatsby/dist/utils/babel-config");


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
};



exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ["> 1%", "last 2 versions", "IE >= 9"],
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader("js").loader("js", {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          !/node_modules\/(swiper|dom7)/.test(modulePath)
        );
      },
      loader: "babel",
      query: babelConfig,
    });
  });
};

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})
