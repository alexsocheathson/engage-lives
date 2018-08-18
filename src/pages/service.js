import React from 'react'

class Service extends React.Component {
  render() {
    const pageContent = this.props.data.allContentfulServiceOpportunitiesPage
      .edges
    const serviceContent = this.props.data.allContentfulServiceOpportunities
      .edges

    const createList = serviceContent.map(service => (
      <div key={service.node.eventName} className="cell small-12">
        <div className="grid-x event animated fadeInUp delay-1s">
          <p className="cell small-12 title">{service.node.eventName}</p>
          <p className="cell small-12 date">
            {service.node.date.substring(0, 10)}
          </p>
          <div className="cell small-12 grid-x flex-row">
            <p className="cell small-12 large-8 description">
              {service.node.eventDetails.eventDetails}
            </p>
            <img
              className="cell small-12 large-4"
              src={service.node.image.file.url}
              alt="event image"
            />
          </div>
          <div className="cell small-12 url">
            <a href={service.node.url}>{service.node.url}</a>
          </div>
        </div>
      </div>
    ))
    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Service Opportunity</h3>
            <p className="animated fadeIn slow">
              {pageContent['0'].node.heading}
            </p>
          </div>
        </div>
        <div className="grid-container">
          <div className="header">
            <p>Events</p>
          </div>
          <div className="grid-x">{createList}</div>
        </div>
      </div>
    )
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
    allContentfulServiceOpportunities(
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          eventName
          date
          url
          eventDetails {
            eventDetails
          }
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
