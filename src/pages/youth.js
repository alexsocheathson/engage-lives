import React from 'react'

class Youth extends React.Component {
  render() {
    const pageContent = this.props.data.allContentfulYouthPage.edges
    const youthContent = this.props.data.allContentfulYouth.edges

    const createList = youthContent.map((youth) =>
      <div key={youth.node.eventTitle} className="cell small-12">
          <div className="grid-x event animated fadeInUp delay-1s">
            <p className="cell small-12 title">{youth.node.eventTitle}</p>
            <p className="cell small-12 date">{youth.node.date}</p>
            <div className="cell small-12 grid-x flex-row">
              <div className="cell small-12 large-8 description">
                <p>{youth.node.description}</p>
              </div>
              <img className="cell small-12 large-4" src={youth.node.image.file.url} alt="event image" />
            </div>
            <div className="cell small-12 url">
              <a href={youth.node.url}>{youth.node.url}</a>
            </div>
          </div>
      </div>

    )

    return (
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Youth and Family</h3>
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

export default Youth

export const query = graphql`
  query YouthQuery {
    allContentfulYouthPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulYouth(sort: {fields: [createdAt] order: DESC}){
      edges {
        node {
          eventTitle
          description
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