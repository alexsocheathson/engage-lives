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
        <h3>Community Action</h3>
        <h4>{pageContent["0"].node.heading}</h4>
        {createList}
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