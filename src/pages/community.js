import React from 'react'

class CommunityAction extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulLearningAndGrowthPage.edges
    const communityContent = this.props.data.allContentfulLearningAndGrowth.edges

    const createList = communityContent.map((community) =>
      <div key={community.node.eventName} >
        <h5>{community.node.eventName}</h5>
        <p>{community.node.date.substring(0,10)}</p>
        <h5>{community.node.eventDetails.eventDetails}</h5>
        <p>{community.node.locationChurch}</p>
        {/* TODO: Remove inline style */}
        <img src={community.node.image.file.url} alt="event image" width="400px;"/>
      </div>
    )

    return(
      <div>
      <div className="banner">
        <div className="grid-container">
          <h3>Learning and Growth</h3>
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

export default CommunityAction

export const query = graphql`
  query CommunityActionQuery {
    allContentfulLearningAndGrowthPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulLearningAndGrowth (sort: {fields: [createdAt] order: ASC}) {
      edges {
       node {
          eventName
          date
          url
          eventDetails{
            eventDetails
          }
          locationChurch
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