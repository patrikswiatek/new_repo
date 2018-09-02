const contentful = require('contentful');
var contentful = require('contentful-management');


const client = contentful.createClient({
  space: 'qcxow5uej8fm',
  accessToken: '693c142e47247234a0c41804d83ca45c1d3ccf17523379f08c3801f015dd735f'
})
// This API call will request a space with the specified ID
client.getSpace()
.then((space) => {
  // Now that we have a space, we can get entries from that space
  space.getEntries()
  .then((entries) => {
    console.log(entries.items)
  })
  // let's get a content type
  space.getContentType('hero')
  .then((contentType) => {
    const hero = contentType.items;
          this.setState({
            title: hero,
    .then((contentType) => {
      console.log('Update was successful')
    })
  })
})
