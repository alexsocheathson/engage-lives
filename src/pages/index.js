import React from 'react'

class IndexPage extends React.Component {
  render() {
    return (
    <div className="home">
      <div className="grid-container">
        <div className="grid-y grid-frame">
          <div className="cell small-1 large-1">
            <div className="grid-x grid-margin-x">
            </div>
          </div>
          <div className="cell small-4 large-2 ">
            <div className="grid-x grid-margin-x">
              <div className="cell small-offset-2 medium-offset-3 small-8">
                <div className="corner">
                  <div className="top-corner"></div>
                  <div className="left-corner"></div>
                </div>
                <h1>A <span className="animated fadeInUp delay-1s">shared</span> area ministry</h1>
                <p>by Como Park Lutheran Church, Falcon Heights Church UCC, and New Life Presbyterian Church PCUSA</p>
                {/* <p>Everything listed below is open to the entire community without regard to personal belief or church membership. Come on, join us. It’ll be fun. </p> */}
              </div>
            </div>
          </div>
          <div className="cell small-6">
            <div className="grid-x">
              <div className="cell small-12">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/engage-lives.appspot.com/o/assets%2Fhandshake%20(1).svg?alt=media&token=fe296ede-dc6f-4803-bb41-ab33e13c1eef"
                  alt="handshake" className="home-image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default IndexPage
