import React from 'react'

class Education extends React.Component {
  render(){
    const pageContent = this.props.data.allContentfulWorshipPage.edges
    const educationContent = this.props.data.allContentfulWorship.edges

    const createList = educationContent.map((education) =>
      <div key={education.node.church} className="cell small-12 large-4 tile animated fadeInUp delay-1s">
        <p className="church">{education.node.church}</p>
        <p className="time">{education.node.worshipTime}</p>
        <p className="time">{education.node.educationTime}</p>
      </div>
    )

    return(
      <div>
        <div className="banner">
          <div className="grid-container">
            <h3>Worship</h3>
            <p className="animated fadeIn slow">{pageContent["0"].node.heading}</p>
          </div>
        </div>
        <div className="grid-container">
          <div className="header">
            <p>Standard Worship and Education Times</p>
          </div>
          <div className="grid-x">
            {createList}
          </div>
        </div>
      </div>
    );
  }
}

export default Education

export const query = graphql`
  query EducationQuery {
    allContentfulWorshipPage {
      edges {
        node {
          heading
        }
      }
    }
    allContentfulWorship{
      edges {
       node {
          church
          worshipTime
          educationTime
        }
      }
    }
  }
`