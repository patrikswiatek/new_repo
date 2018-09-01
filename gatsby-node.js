exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "develop":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;

    case "build-css":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;

    case "build-html":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;

    case "build-javascript":
      config.loader("css", {
        include: /flexboxgrid/,
      });

      break;
  }

  return config;
};
// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//       graphql(
//         `
//           {
//             allContentfulPage() {
//               edges {
//                 node {
//                   id
//                   title
//                 }
//               }
//             }
//           }
//         `
//       )
//         .then(result => {
//           if (result.errors) {
//             reject(result.errors)
//           }
//         })
//       })
// }
