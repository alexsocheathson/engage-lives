import React from 'react'
import Link from 'gatsby-link'

import $ from 'jquery'
import 'foundation-sites'

class Header extends React.Component {
  componentDidMount() {
    $(document).foundation()
  }

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
            <div className="top-bar-right show-for-medium">
              <div className="menu">
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
              </div>
            </div>
            <div className="top-bar-right show-for-small-only">
              {/* <div className="menu"> */}
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
                  </ul>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
