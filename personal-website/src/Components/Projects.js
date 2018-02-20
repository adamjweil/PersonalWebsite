import React from 'react';
import { NavLink } from 'react-router-dom';
import { Slide, Fade, Zoom } from 'react-slideshow-image';

import CoinstacheSlideshow from './Projects/Coinstache/CoinstacheSlideshow';
import EatAndReviewSlideshow from './Projects/EatAndReview/EatAndReviewSlideshow';


const Projects = (props) => (
  <div className="main-content projects">
    <h2>Projects</h2>
    <section className="projectOverview">
      <div className="photoWithTitle">
        <div className="projectTitle">
          <h2>Coin'Stache</h2>
          <CoinstacheSlideshow />
        </div>
      </div>

      <div className="projectDescription">
        <h4>DESCRIPTION</h4>
        <h3>Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.</h3>
        <h4>TECH STACK</h4>
        <h3></h3>

      </div>
    </section>
    <section className="EatReviewOverview">
      <div className="EatReviewTitle">
        <h2>Eat  Review</h2>
        <EatAndReviewSlideshow />
      </div>
      <div className="EatReviewDescription">
        <h4>DESCRIPTION</h4>
        <h3>Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.</h3>
        <h4>TECH STACK</h4>
        <h3></h3>

      </div>
    </section>
  </div>
);

export default Projects;
