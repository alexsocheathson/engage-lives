import React from 'react'

class Service extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulServiceOpportunitiesPage.edges
    const serviceContent = this.props.data.allContentfulServiceOpportunities.edges

    const createList = serviceContent.map((service) =>
      <div key={service.node.eventName} >
        <h2>{service.node.eventName}</h2>
        <p>{service.node.date.substring(0,10)}</p>
        <h5>{service.node.eventDetails.eventDetails}</h5>
        <p><a href={service.node.url}>{service.node.url}</a></p>
        <p>{service.node.locationChurch}</p>
        {/* TODO: Remove inline style */}
        <img src={service.node.image.file.url} alt="event image" width="400px;"/>
      </div>
    )
    return(
        <div>
          <div className="banner">
            <div className="grid-container">
              <h3>Service Opportunity</h3>
              <p>{pageContent["0"].node.heading}</p>
            </div>
          </div>
          <div className="header">
            <p>Events</p>
          </div>
          <div className="grid-x">
            {createList}
          </div>
        </div>
    );
  }
}

export default Service

export const query = graphql`
  query ServiceQuery {
    allContentfulServiceOpportunitiesPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulServiceOpportunities(sort: {fields: [createdAt] order: ASC}) {
      edges {
       node {
          eventName
          date
          url
          eventDetails {
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