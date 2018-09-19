import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="grid-container">
          <div className="top-bar">
            <div className="top-bar-left">
              <div className="logo">
                <a href="/">Engage Lives</a>
              </div>
            </div>
            <div className="top-bar-right show-for-small">
              <div className="menu">
                    <Link to="/education/">Worship</Link>
                    <Link to="/wellness/">Wellness</Link>
                    <Link to="/celebrations/">Celebrations</Link>
                    <Link to="/community/">Learning and Growth</Link>
                    <Link to="/youth/">Youth and Family</Link>
                    <Link to="/service/">Service Opportunities</Link>
              </div>
            </div>
            {/* <div className="top-bar-right show-for-small-only">
              <ul
                className="vertical menu"
                data-responsive-menu=" small-accordion"
              >
                <li>
                  <a>Icon</a>
                  <ul className="vertical menu">
                    <li>
                      <Link to="/education/">Worship</Link>
                    </li>
                    <li>
                      <Link to="/wellness/">Wellness</Link>
                    </li>
                    <li>
                      <Link to="/celebrations/">Celebrations</Link>
                    </li>
                    <li>
                      <Link to="/community/">Learning and Growth</Link>
                    </li>
                    <li>
                      <Link to="/service/">Service Opportunities</Link>
                    </li>
                    <li>
                      <Link to="/advocacy/">Public Advocacy</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
