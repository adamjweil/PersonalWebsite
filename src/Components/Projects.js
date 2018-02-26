import React from 'react';
import { NavLink } from 'react-router-dom';
import { Slide, Fade, Zoom } from 'react-slideshow-image';

import CoinstacheSlideshow from './Projects/Coinstache/CoinstacheSlideshow';
import CoinstachePhotos from './Projects/Coinstache/CoinstachePhotos';
import EatAndReviewPhotos from './Projects/EatAndReview/EatAndReviewPhotos';
import InstaClonePhotos from './Projects/InstaClone/InstaClonePhotos';
import EatAndReviewSlideshow from './Projects/EatAndReview/EatAndReviewSlideshow';


const Projects = (props) => (
  <div className="projectPage">
    <div className="projectOverview">
        <div className="projectTitle">
          <h2>Coin'Stache</h2>
          <CoinstachePhotos />
        </div>

      <div className="projectDescription">
        <h3>DESCRIPTION</h3>
        <p>Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.</p>

        <div className="techStack">
          <h3>TECH STACK</h3>
          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This mobile application was developed using a React Native front-end framework. The main purpose behind this decision was to have the ability to run the application across multiple different devices without having to alter the code base significantly. </p>
            </div>
          </div>

          <div className="frontEnd">
            <div className="techTitles">
              <h4>BACK END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This application is supported with a Ruby On Rails back-end. With most of the time intensive aspects of the development being consumed in our fron-end, we needed a back-end that would allow for rapid development and scalability.</p>
            </div>
          </div>

          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRAMEWORKS  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>NPM, Webpack, Yarn </p>
            </div>
          </div>

          <div className="projectLinks">
            <div className="link">
              <h4><i className="glyphicon glyphicon-chevron-right"></i><a href="https://github.com/adamjweil/CoinStash" target="_blank">GitHub</a></h4>
            </div>
            <div className="link">
            <h4><i className="glyphicon glyphicon-chevron-right"></i><a href="https://coinstache-backend.herokuapp.com" target="_blank">Heroku</a></h4>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="projectOverview">
      <div className="projectTitle">
        <h2>Eat  Review</h2>
        <EatAndReviewPhotos />
      </div>
      <div className="projectDescription">
        <h3>DESCRIPTION</h3>
        <p>Web application built for posting new and exciting restaurants. Users can create an account, post a new restaurant with relevant details (provided that the restaurant is not already on the app), read and post reviews for these various eateries, and manage their account through the easy-to-use profile page.</p>
      <div className="techStack">
        <h3>TECH STACK</h3>
          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This web application was built using a Ruby On Rails framework. To create the dynamic Login and Register buttons on the Navbar, I needed to integrate some Javascript into the code base.</p>
            </div>
          </div>

          <div className="frontEnd">
            <div className="techTitles">
              <h4>BACK END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>The Back End of this application is built in Ruby, and the data it stores is managed with a PostgreSQL database.</p>
            </div>
          </div>

          <div className="frontEnd">
            <div className="techTitles">
              <h4>DATABASES  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>PostgresSQL, ActiveRecord</p>
            </div>
          </div>

          <div className="projectLinks">
            <div className="link">
              <h4><i className="glyphicon glyphicon-chevron-right"></i><a href="https://github.com/adamjweil/AdamsEat-Review" target="_blank">GitHub</a></h4>
            </div>
            <div className="link">
              <h4><i className="glyphicon glyphicon-chevron-right"></i><a href="https://adams-eatandreview.herokuapp.com/" target="_blank">Heroku</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="projectOverview">
        <div className="projectTitle">
          <h2>React-InstaClone</h2>
          <InstaClonePhotos />
        </div>

      <div className="projectDescription">
        <h3>DESCRIPTION</h3>
        <p>Web application built to simulate the ‘Instagram’ experience in browser. Has a main page displaying all of the recently posted photos. Each user can navigate to their unique profile page where they can upload images which are then displayed on their timeline.</p>

        <div className="techStack">
          <h3>TECH STACK</h3>
          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This web app application is built entirely in React JS. You will notice that when images are uploaded they are displayed in the timeline immediately, without the page having to reload. The same is true when you navigate between pages, the page renders without ever needing to reload. I built this website to refine my React skills by creating a complete application where all data is stored in State, rather then a database. Since everything is managed in State, there is no need for a Back End.</p>
            </div>
            <div className="techDetails">

            </div>
          </div>
          <div className="projectLinks">
            <div className="link">
              <h4><i className="glyphicon glyphicon-chevron-right"></i><a href="https://github.com/adamjweil/React-InstaClone" target="_blank">GitHub</a></h4>
            </div>
            <div className="link">
              <h4><i className="glyphicon glyphicon-chevron-right"></i><a href="https://react-instaclone.herokuapp.com/" target="_blank">Heroku</a></h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
