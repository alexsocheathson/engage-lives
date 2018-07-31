import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ServiceDetailPage extends Component {
  render() {
    const {
      eventName,
      teaser,
      date,
      url,
      eventDetails,
      publishingChurch,
    } = this.props.data.contentfulServiceOpportunities
    return (
      <div>
        <h2>{eventName}</h2>
        <p>{date.substring(0,10)}</p>
        <h5>{teaser}</h5>
        <p>{eventDetails.eventDetails}</p>
        <p><a href={url}>{url}</a></p>
        <p>{publishingChurch}</p>
      </div>
    )
  }
}

ServiceDetailPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ServiceDetailPage

export const pageQuery = graphql`
  query serviceDetailQuery($id: String!){
    contentfulServiceOpportunities(id: {eq: $id}) {
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
`