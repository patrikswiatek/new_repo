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
