import React from 'react';
import { NavLink } from 'react-router-dom';
import { Slide, Fade, Zoom } from 'react-slideshow-image';

import CoinstacheSlideshow from './Projects/Coinstache/CoinstacheSlideshow';
import CoinstachePhotos from './Projects/Coinstache/CoinstachePhotos';
import EatAndReviewPhotos from './Projects/EatAndReview/EatAndReviewPhotos';
import EatAndReviewSlideshow from './Projects/EatAndReview/EatAndReviewSlideshow';


const Projects = (props) => (
  <div className="main-content projects">
    <h2>Projects</h2>
    <div className="projectOverview">

        <div className="projectTitle">
          <h2>Coin'Stache</h2>
          <CoinstachePhotos />

        </div>


      <div className="projectDescription">
        <h4>DESCRIPTION</h4>
        <h3>Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.</h3>

        <div className="techStack">
          <h3>TECH STACK</h3>

          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This mobile application was developed using React Native</p>
            </div>
          </div>

          <div className="frontEnd">
            <div className="techTitles">
              <h4>BACK END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This mobile application was developed using React Native</p>
            </div>
          </div>



        </div>


        <h3></h3>

      </div>
    </div>
    <div className="EatReviewOverview">
      <div className="EatReviewTitle">
        <h2>Eat  Review</h2>
        <EatAndReviewPhotos />
      </div>
      <div className="EatReviewDescription">
        <h4>DESCRIPTION</h4>
        <h3>Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.</h3>
        <h4>TECH STACK</h4>
        <h3></h3>

      </div>
    </div>
  </div>
);

export default Projects;
