import React, { Component} from 'react';
import PropTypes from 'prop-types';

class CommunityDetailPage extends Component {
  render() {
    const {
      eventName,
      teaser,
      date,
      url,
      eventDetails,
      publishingChurch,
    } = this.props.data.contentfulCommunityAction
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

CommunityDetailPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default CommunityDetailPage

export const pageQuery = graphql`
  query communityDetailQuery($id: String!){
    contentfulCommunityAction(id: {eq: $id}) {
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