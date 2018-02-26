import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Home = (props) => (
  <div className="main-content about">
    <div>


    </div>
    <div className="homeContainer">
      <div className="homePhoto">
        <img src="https://user-images.githubusercontent.com/25589910/36649262-c4f14e38-1a69-11e8-8722-002b648ea184.jpg">
        </img>
        <div className="outsideLinks">
          <h3><i className="glyphicon glyphicon-chevron-right"></i><a href="https://www.linkedin.com/in/adamjweil/" target="_blank"> LinkedIn</a></h3>
          <h3><i className="glyphicon glyphicon-chevron-right"></i><a href="https://github.com/adamjweil" target="_blank"> GitHub</a></h3>
          <h3><a href="mailto:adamjweil@gmail.com">AdamJWeil@gmail.com</a></h3>
          <h3>(908) 591-9920</h3>
        </div>
      </div>
      <div className="homeBio">
        <p>Adam Weil loves a challenge and the thrill that comes with it. As a trader at a small firm, he loved the energy and camaraderie of working with a smaller, close knit team. However, he had always wanted to start his own company; Adam founded a retail start-up with his childhood best friend and soon after went to Dev Bootcamp to complete the Fullstack Web Development program to continue creating his own projects. He now hopes to find a position that allows him to leverage his background in finance and tech. </p>
      </div>
    </div>

  </div>
);

export default Home;
