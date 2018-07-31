import React from 'react'

class Celebration extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulCelebrationPage.edges
    const celebrationContent = this.props.data.allContentfulCelebrations.edges

    const createList = celebrationContent.map((celebration) =>
      <div key={celebration.node.eventName} >
        <a href={"/celebrations/" + celebration.node.slug}><h2>{celebration.node.eventName}</h2></a>
        <p>{celebration.node.date.substring(0,10)}</p>
        <h5>{celebration.node.teaser}</h5>
        {/*<p><a href={celebration.node.url}>{celebration.node.url}</a></p>*/}
        <p>{celebration.node.publishingChurch}</p>
      </div>
    )

    return(
      <div>
        <h1>Celebration</h1>
        <h4>{pageContent["0"].node.heading}</h4>
        {createList}
      </div>
    );
  }
}

export default Celebration

export const query = graphql`
  query CelebrationQuery {
    allContentfulCelebrationPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulCelebrations(sort: {fields: [createdAt] order: ASC}) {
      edges {
       node {
          eventName
          teaser
          date
          url
          publishingChurch
          slug
        }
      }
    }
  }
`