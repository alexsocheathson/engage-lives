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
    const detailPageTemplate = path.resolve('src/templates/education-detail-page.js')
    const servicePageTemplate = path.resolve('src/templates/service-detail-page.js')
    const communityPageTemplate = path.resolve('src/templates/community-detail-page.js')
    const celebrationPageTemplate = path.resolve('src/templates/celebration-detail-page.js')
    resolve(
      graphql(`
        {
          allContentfulEducation (limit: 100) {
            edges {
              node {
                id
                slug
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
            path: "education/" + edge.node.slug,
            component: detailPageTemplate,
            context: {
              id: edge.node.id
            }
          })
        })
      }),
    graphql(`
        {
          allContentfulServiceOpportunities(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allContentfulServiceOpportunities.edges.forEach((edge) => {
        createPage ({
          path: "service/" + edge.node.slug,
          component: servicePageTemplate,
          context: {
            id: edge.node.id
          }
        })
      })
    }),
      graphql(`
        {
          allContentfulCommunityAction(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulCommunityAction.edges.forEach((edge) => {
          createPage ({
            path: "community/" + edge.node.slug,
            component: communityPageTemplate,
            context: {
              id: edge.node.id
            }
          })
        })
      }),
      graphql(`
        {
          allContentfulCelebrations(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulCelebrations.edges.forEach((edge) => {
          createPage ({
            path: "celebrations/" + edge.node.slug,
            component: celebrationPageTemplate,
            context: {
              id: edge.node.id
            }
          })
        })
      }),
    )
  })
}
