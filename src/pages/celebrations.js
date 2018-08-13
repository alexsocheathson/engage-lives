import React from 'react'

class Celebration extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulCelebrationPage.edges
    const celebrationContent = this.props.data.allContentfulCelebrations.edges

    const createList = celebrationContent.map((celebration) =>
      <div key={celebration.node.eventName}>
        <p>{celebration.node.eventName}</p>
        <p>{celebration.node.date.substring(0,10)}</p>
        <p>{celebration.node.eventDetails.eventDetails}</p>
        {/*<p><a href={celebration.node.url}>{celebration.node.url}</a></p>*/}
        <p>{celebration.node.publishingChurch}</p>
        {/* TODO: Remove inline style */}
        <img src={celebration.node.image.file.url} alt="event image" width="400px;"/>
      </div>
    )

    return(
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Celebration</h3>
            <p>{pageContent["0"].node.heading}</p>
          </div>
        </div>
        <div className="grid-container">
          <div className="header">
            <p>Events</p>
          </div>
          <div className="grid-x">
            {createList}
          </div>
        </div>
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
          eventDetails{
            eventDetails
          }
          date
          url
          publishingChurch
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`