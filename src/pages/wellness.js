import React from 'react'

class Wellness extends React.Component {
  render(){
    console.log(this)
    const pageContent = this.props.data.allContentfulWellnessPage.edges
    const wellnessContent = this.props.data.allContentfulWellness.edges

    const createList = wellnessContent.map((wellness) =>
      <div key={wellness.node.eventTitle} >
        <h5>{wellness.node.eventTitle}</h5>
        <p>{wellness.node.description}</p>
        <a href={wellness.node.url}><p>{wellness.node.url}</p></a>
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
        }
      }
    }
  }
`