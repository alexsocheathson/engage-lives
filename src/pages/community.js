import React from 'react'

class CommunityAction extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulLearningAndGrowthPage.edges
    const communityContent = this.props.data.allContentfulLearningAndGrowth.edges

    const createList = communityContent.map((community) =>
      <div key={community.node.eventName} className="cell small-12">
        <div className="grid-x event animated fadeInUp delay-1s">
          <p className="cell small-12 title">{community.node.eventName}</p>
          <p className="cell small-12 date">{community.node.date.substring(0,10)}</p>
          <div className="cell small-12 grid-x flex-row">
            <p className="cell small-12 large-8 description">{community.node.eventDetails.eventDetails}</p>
            <img className="cell small-12 large-4" src={community.node.image.file.url} alt="event image"/>
          </div>
          <div className="cell small-12 url">
            <p>{community.node.url}</p>
          </div>
        </div>
      </div>
    )

    return(
      <div>
      <div className="banner">
        <div className="grid-container">
          <h3>Learning and Growth</h3>
<<<<<<< HEAD
          <p className="animated fadeIn slow">{pageContent["0"].node.heading}</p>
=======
          <p>{pageContent["0"].node.heading}</p>
>>>>>>> c628cec6ab893c7204e4c9a1989d12bbe122049e
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