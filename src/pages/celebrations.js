import React from 'react'

class Celebration extends React.Component {
  render() {
    const pageContent = this.props.data.allContentfulCelebrationPage.edges
    const celebrationContent = this.props.data.allContentfulCelebrations.edges

    const createList = celebrationContent.map(celebration => (
      <div key={celebration.node.eventName} className="cell small-12">
        <div className="grid-x event animated fadeInUp delay-1s">
          <p className="cell small-12 title">{celebration.node.eventName}</p>
          <p className="cell small-12 date">
            {celebration.node.date.substring(0, 10)}
          </p>
          <div className="cell small-12 grid-x flex-row">
            <p className="cell small-12 large-8 description">
              {celebration.node.eventDetails.eventDetails}
            </p>
            {/* <div className="cell small-12 large-8 description">
            dangerouslySetInnerHTML={{ __html: celebration.node.eventDetails.childMarkdownRemark.html }}
            </div> */}
            <img
              className="cell small-12 large-4"
              src={celebration.node.image.file.url}
              alt="event image"
            />
          </div>
          <div className="cell small-12 url">
            <a href={celebration.node.url}>{celebration.node.url}</a>
          </div>
        </div>
      </div>
    ))

    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Celebration</h3>
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
    allContentfulCelebrations(sort: { fields: [date], order: ASC }) {
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
