/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `ContentfulServiceOpportunities` || node.internal.type === 'ContentfulCommunityAction' || node.internal.type === 'ContentfulEducation' || node.internal.type === 'ContentfulCelebrations') {
    console.log(node.internal.type)
    console.log('\n',node)
  }};

const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const detailPageTemplate = path.resolve('src/templates/detail-page.js')
    resolve(
      // add query for slug
      graphql(`
        {
          allContentfulEducation (limit: 100) {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulEducation.edges.forEach((edge) => {
          createPage ({
            path: edge.node.id,
            component: detailPageTemplate,
            context: {
              id: edge.node.id
            }
          })
        })
        return
      })
    )
  })
}