// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//       graphql(
//         `
//           {
//             pageQuery(limit: 1000) {
//               edges {
//                 node {
//                   id
//                   name
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
