import React from 'react'

class Service extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulServiceOpportunitiesPage.edges
    const serviceContent = this.props.data.allContentfulServiceOpportunities.edges

    const createList = serviceContent.map((service) =>
      <div key={service.node.eventName} >
        <h2>{service.node.eventName}</h2>
        <p>{service.node.date.substring(0,10)}</p>
        <h5>{service.node.teaser}</h5>
        <p>{service.node.eventDetails.eventDetails}</p>
        <p><a href={service.node.url}>{service.node.url}</a></p>
        <p>{service.node.publishingChurch}</p>
      </div>
    )
    return(
        <div>
          <h1>Service Opportunity</h1>
          <h4>{pageContent["0"].node.heading}</h4>
          {createList}
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
    allContentfulServiceOpportunities {
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