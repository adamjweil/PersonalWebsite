import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Home = (props) => (
  <div className="main-content about">
    <div>


    </div>
    <div className="homeContainer">
      <div className="homePhoto">
        <img src="https://user-images.githubusercontent.com/25589910/36647259-b65636ea-1a50-11e8-91b4-6320e7852e4a.png"></img>
        <div className="outsideLinks">
          <h3><i className="glyphicon glyphicon-chevron-right"></i><a href="https://www.linkedin.com/in/adamjweil/" target="_blank"> LinkedIn</a></h3>
          <h3><i className="glyphicon glyphicon-chevron-right"></i><a href="https://github.com/adamjweil" target="_blank"> GitHub</a></h3>
          <h3><a href="mailto:adamjweil@gmail.com">AdamJWeil@gmail.com</a></h3>
          <h3>(908) 591-9920</h3>
        </div>
      </div>
    </div>

  </div>
);

export default Home;
