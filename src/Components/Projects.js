import React from 'react';
import { NavLink } from 'react-router-dom';
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import Button from 'react-bootstrap/lib/Button';

import CoinstacheSlideshow from './Projects/Coinstache/CoinstacheSlideshow';
import CoinstachePhotos from './Projects/Coinstache/CoinstachePhotos';
import EatAndReviewPhotos from './Projects/EatAndReview/EatAndReviewPhotos';
import InstaClonePhotos from './Projects/InstaClone/InstaClonePhotos';
import WebScraperPhotos from './Projects/WebScraper/WebScraperPhotos';
import EatAndReviewSlideshow from './Projects/EatAndReview/EatAndReviewSlideshow';


const Projects = (props) => (
  <div className="projectPage">
    <div className="projectOverview">
        <div className="projectName">
          <h2>CoinStache</h2>
        </div>
        <div className="projectTitle">
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
            <div className="techTitlesLong">
              <h4>FRAMEWORKS  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>NPM, Webpack, Yarn </p>
            </div>
          </div>

          <div className="projectLinks">
            <div className="link">
              <Button
                bsStyle="warning"
                bsSize="large"
                href="https://github.com/adamjweil/CoinStash" target="_blank">
                <h3>GitHub</h3>
                </Button>
            </div>
            <div className="link">
              <Button
                bsStyle="warning"
                bsSize="large"
                href="https://coinstache-backend.herokuapp.com" target="_blank">
                <h3>Heroku</h3>
                </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div className="projectOverview">
      <div className="projectName">
        <h2>Eat & Review</h2>
      </div>
      <div className="projectTitle">
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
                <Button
                  bsStyle="warning"
                  bsSize="large"
                  href="https://github.com/adamjweil/AdamsEat-Review" target="_blank">
                  <h3>GitHub</h3>
                  </Button>
            </div>
            <div className="link">
                <Button
                  bsStyle="warning"
                  bsSize="large"
                  href="https://adams-eatandreview.herokuapp.com/" target="_blank">
                  <h3>Heroku</h3>
                  </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="projectOverview">
      <div className="projectName">
        <h2>React-InstaClone</h2>
      </div>
      <div className="projectTitle">
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
                <Button
                  bsStyle="warning"
                  bsSize="large"
                  href="https://github.com/adamjweil/React-InstaClone" target="_blank">
                  <h3>GitHub</h3>
                </Button>
            </div>
            <div className="link">
              <Button
                bsStyle="warning"
                bsSize="large"
                href="https://react-instaclone.herokuapp.com/" target="_blank">
                <h3>Heroku</h3>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="projectOverview">
      <div className="projectName">
        <h2>Adam's Web Scraper</h2>
      </div>
      <div className="projectTitle">
        <WebScraperPhotos />
      </div>

      <div className="projectDescription">
        <h3>DESCRIPTION</h3>
        <p>
          The simple web app provides an easy way to scrape websites for content located within {`<h1>, <h2>, <h3>, <h4>, and <p>`}  tags, as well links and photos. On the Home Page you can see the ten most recently scraped URLs by anyone (using this app, obviously). Below the recently scraped URLs section, there is an input field where you can enter the URL that you wish to scrape.  A list of the URLs that you've scraped can easily be accessed by navigating to the 'Hisory' page. This data is not stored in our database, so deleting your cookies will erase your scraping history. eaThis information is not stored in a database, so you c You can easily access your search history by navigating to the 'History' page.  After submitting a URL, you'll be redirected to a page displaying an organized few of all the scraped content, links, and photos. If the page being scraped has a large amount of content, you can use the 'Quick Links' section on the top left of the results page to navigate the data more easily and effiently.
      </p>

        <div className="techStack">
          <h3>TECH STACK</h3>
          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This app was built using Ruby on Rails, and styled with Bootstrap. A couple Ruby gems in particular helped make this scraping algorithm much more dynamic and seamless. Nokogiri, and HTTParty</p>
            </div>
            <div className="techDetails">

            </div>
          </div>
          <div className="projectLinks">
            <div className="link">
                <Button
                  bsStyle="warning"
                  bsSize="large"
                  href="https://github.com/adamjweil/AdamsApp" target="_blank">
                  <h3>GitHub</h3>
                </Button>
            </div>
            <div className="link">
              <Button
                bsStyle="warning"
                bsSize="large"
                href="https://murmuring-anchorage-57613.herokuapp.com/" target="_blank">
                <h3>Heroku</h3>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
);

export default Projects;
