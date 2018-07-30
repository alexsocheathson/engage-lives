import React from 'react'

class CommunityAction extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulCommunityActionPage.edges
    const communityContent = this.props.data.allContentfulCommunityAction.edges

    const createList = communityContent.map((community) =>
      <div key={community.node.eventName} >
        <h2>{community.node.eventName}</h2>
        <p>{community.node.date.substring(0,10)}</p>
        <h5>{community.node.teaser}</h5>
        <p>{community.node.eventDetails.eventDetails}</p>
        <p><a href={community.node.url}>{community.node.url}</a></p>
        <p>{community.node.publishingChurch}</p>
      </div>
    )

    return(
      <div>
        <h1>Community Action</h1>
        <h4>{pageContent["0"].node.heading}</h4>
        {createList}
      </div>
    );
  }
}

export default CommunityAction

export const query = graphql`
  query CommunityActionQuery {
    allContentfulCommunityActionPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulCommunityAction {
      edges {
       node {
          eventName
          teaser
          date
          url
          eventDetails {
           eventDetails
          }
          publishingChurch
        }
      }
    }
  }
`