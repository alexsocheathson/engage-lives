import React from 'react'

class Celebration extends React.Component {
  render() {
    const pageContent = this.props.data.allContentfulCelebrationPage.edges
    const celebrationContent = this.props.data.allContentfulCelebrations.edges

<<<<<<< HEAD
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
=======
    const createList = celebrationContent.map((celebration) =>
      <div key={celebration.node.eventName}>
        <p>{celebration.node.eventName}</p>
        <p>{celebration.node.date.substring(0,10)}</p>
        <p>{celebration.node.eventDetails.eventDetails}</p>
        {/*<p><a href={celebration.node.url}>{celebration.node.url}</a></p>*/}
        <p>{celebration.node.publishingChurch}</p>
        {/* TODO: Remove inline style */}
        <img src={celebration.node.image.file.url} alt="event image" width="400px;"/>
>>>>>>> c628cec6ab893c7204e4c9a1989d12bbe122049e
      </div>
    ))

    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Celebration</h3>
<<<<<<< HEAD
            <p className="animated fadeIn slow">
              {pageContent['0'].node.heading}
            </p>
=======
            <p>{pageContent["0"].node.heading}</p>
>>>>>>> c628cec6ab893c7204e4c9a1989d12bbe122049e
          </div>
        </div>
        <div className="grid-container">
          <div className="header">
            <p>Events</p>
          </div>
<<<<<<< HEAD
          <div className="grid-x">{createList}</div>
=======
          <div className="grid-x">
            {createList}
          </div>
>>>>>>> c628cec6ab893c7204e4c9a1989d12bbe122049e
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
    allContentfulCelebrations(sort: { fields: [createdAt], order: ASC }) {
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
