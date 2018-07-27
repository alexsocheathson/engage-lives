import React from 'react'

class Education extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulEducationPage.edges
    const educationContent = this.props.data.allContentfulEducation.edges

    const createList = educationContent.map((education) =>
      <div key={education.node.eventName} >
        <h2>{education.node.eventName}</h2>
        <p>{education.node.date.substring(0,10)}</p>
        <h5>{education.node.teaser}</h5>
        <p>{education.node.eventDetails.eventDetails}</p>
        <p><a href={education.node.url}>{education.node.url}</a></p>
        <p>{education.node.publishingChurch}</p>
      </div>
    )

    return(
      <div>
        <h1>Education</h1>
        <h4>{pageContent["0"].node.heading}</h4>
        {createList}
      </div>
    );
  }
}

export default Education

export const query = graphql`
  query EducationQuery {
    allContentfulEducationPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulEducation {
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