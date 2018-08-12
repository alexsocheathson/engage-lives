import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  render() {
    return(
      <div className="nav">
        <div className="grid-container">
          <div className="top-bar">
            <div className="top-bar-left">
              <div className="logo">
                <a href="/">Engage Lives</a>
              </div>
            </div>
            <div className="top-bar-right">
              <div className="menu">
                <li><Link to="/education/">Worship</Link></li>
                <li><Link to="/wellness/">Wellness</Link></li>
                <li><Link to="/celebrations/">Celebrations</Link></li>
                <li><Link to="/community/">Learning and Growth</Link></li>
                <li><Link to="/service/">Service Opportunities</Link></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
