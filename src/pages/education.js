import React from 'react'

class Education extends React.Component {
  render(){
    console.log(this)
    const pageContent = this.props.data.allContentfulWorshipPage.edges
    const educationContent = this.props.data.allContentfulWorship.edges

    const createList = educationContent.map((education) =>
      <div key={education.node.church} >
        <h5>{education.node.church}</h5>
        <p>{education.node.worshipTime}</p>
        <p>{education.node.educationTime}</p>
      </div>
    )

    return(
      <div>
        <h3>Worship and Education Times</h3>
        <h4>{pageContent["0"].node.heading}</h4>
        {createList}
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
    allContentfulWorship(sort: {fields: [createdAt] order: ASC}){
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