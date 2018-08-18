import React from 'react'

const IndexPage = () => {
  return (
    <div className="home">
      <div className="grid-x grid-margin-x">
        <div className="cell small-offset-2 medium-offset-2 small-8">
          <h1 className="animated fadeInDown delay-1s">A Shared Area Ministry</h1>
          <p className="animated fadeInDown delay-2s">Offered by:<br /> Como Park Lutheran Church, Falcon Heights Church UCC, and New Life Presbyterian Church PCUSA</p>
        </div>
        <div className="cell small-12">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/engage-lives.appspot.com/o/assets%2Fsky-strip.jpg?alt=media&token=26105eda-9562-4f9e-9452-359457cba835"
            alt="sky-strip" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default IndexPage
