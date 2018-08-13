import React from 'react'

class Wellness extends React.Component {
  render() {
    console.log(this)
    const pageContent = this.props.data.allContentfulWellnessPage.edges
    const wellnessContent = this.props.data.allContentfulWellness.edges

    const createList = wellnessContent.map((wellness) =>
      <div key={wellness.node.eventTitle} className="cell small-12 event">
        <h5>{wellness.node.eventTitle}</h5>
        <p>{wellness.node.description}</p>
        <a href={wellness.node.url}><p>{wellness.node.url}</p></a>
        {/* TODO: Remove inline style */}
        <img src={wellness.node.image.file.url} alt="event image" width="400px;" />
      </div>
    )

    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Wellness</h3>
            <p>{pageContent["0"].node.heading}</p>
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