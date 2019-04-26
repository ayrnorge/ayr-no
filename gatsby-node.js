const path = require("path")
const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
promise.then(result => {
  if (result.errors) {
    throw result.errors
  }
  return result
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await wrapper(
    graphql(`
    {
      allPrismicPost{
        edges{
          node{
            id
            uid
            data{
              date
              title{
                text
              }
              description
              content{
                html
              }
            }
          }
        }
      }
    }
    `
    )
    )
    
    const postsList = result.data.allPrismicPost.edges
    const postTemplate = require.resolve('./src/templates/post.jsx')

  postsList.forEach(edge => {
    console.log("aloha")
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })
}