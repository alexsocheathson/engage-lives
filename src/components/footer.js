import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="grid-container">
          Footer placeholder
          <Link to="/about">About Us</Link>
        </div>
      </div>
  );
  }
}

export default Footer