import React from 'react'

class Wellness extends React.Component {
  render() {
    const pageContent = this.props.data.allContentfulWellnessPage.edges
    const wellnessContent = this.props.data.allContentfulWellness.edges

    const createList = wellnessContent.map((wellness) =>
      <div key={wellness.node.eventTitle} className="cell small-12">
          <div className="grid-x event animated fadeInUp delay-1s">
            <p className="cell small-12 title">{wellness.node.eventTitle}</p>
            <div className="cell small-12 grid-x flex-row">
              <div className="cell small-12 large-8 description">
                <p>{wellness.node.description}</p>
              </div>
              <img className="cell small-12 large-4" src={wellness.node.image.file.url} alt="event image" />
            </div>
            <div className="cell small-12 url">
              <a href={wellness.node.url}>{wellness.node.url}</a>
            </div>
          </div>
      </div>

    )

    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Wellness</h3>
            <p className="animated fadeIn slow">{pageContent["0"].node.heading}</p>
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

export default Wellness

export const query = graphql`
  query WellnessQuery {
    allContentfulWellnessPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulWellness(sort: {fields: [createdAt] order: ASC}){
      edges {
        node {
          eventTitle
          description
          location
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