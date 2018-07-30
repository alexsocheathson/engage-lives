import React, { Component} from 'react';
import PropTypes from 'prop-types';

class DetailPage extends Component {
  render() {
    const {
      eventName
    } = this.props.data.contentfulEducation
    return (
      <div>
        <h1>{eventName}</h1>
      </div>
    )
  }
}

DetailPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default DetailPage

export const pageQuery = graphql`
  query EducationDetailQuery($id: String!){
    contentfulEducation(id: {eq: $id}) {
      eventName
    }
  }
`