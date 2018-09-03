import React from "react";


// Imports data from Contentful to the props
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(
        `
          {
            Query(limit: 1000) {
              edges {
                node {
                  id
                  name
                  description
                  type
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
        })
      })
}
