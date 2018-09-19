import React from 'react'

class Advocacy extends React.Component {
  render() {
    const pageContent = this.props.data.allContentfulPublicAdvocacyPage.edges
    const publicAdvocacyContent = this.props.data.allContentfulPublicAdvocacy.edges

    const createList = publicAdvocacyContent.map(advocacy => (
      <div key={advocacy.node.eventName} className="cell small-12">
        <div className="grid-x event animated fadeInUp delay-1s">
          <p className="cell small-12 title">{advocacy.node.eventName}</p>
          <p className="cell small-12 date">
            {advocacy.node.date.substring(0, 10)}
          </p>
          <div className="cell small-12 grid-x flex-row">
            <p className="cell small-12 large-8 description">
              {advocacy.node.eventDetails.eventDetails}
            </p>
            <img
              className="cell small-12 large-4"
              src={advocacy.node.image.file.url}
              alt="event image"
            />
          </div>
          <div className="cell small-12 url">
            <a href={advocacy.node.url}>{advocacy.node.url}</a>
          </div>
        </div>
      </div>
    ))

    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Public Advocacy</h3>
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

export default Advocacy

export const query = graphql`
  query AdvocacyQuery {
    allContentfulPublicAdvocacyPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulPublicAdvocacy(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          eventName
          eventDetails {
            eventDetails
          }
          date
          url
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
