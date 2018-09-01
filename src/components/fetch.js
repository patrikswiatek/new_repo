import React from "react";
import styled from 'styled-components';

var contentful = require('contentful-management')

var client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: '693c142e47247234a0c41804d83ca45c1d3ccf17523379f08c3801f015dd735f
'
})

// This API call will request a space with the specified ID
client.getSpace('qcxow5uej8fm')
.then((space) => {
  // Now that we have a space, we can get entries from that space
  space.getEntries()
  .then((entries) => {
    console.log(entries.items)
  })

  // let's get a content type
  space.getContentType('Hero')
  .then((contentType) => {
    // and now let's update its name
    .then((contentType) => {
      console.log('Update was successful')
    })
  })
})
