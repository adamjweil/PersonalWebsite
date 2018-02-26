import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
      <div className="resumeContainer">
          <div className="printButton">
            <Button href="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" download="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" bsStyle="info" style={{fontSize:'1rem',width:'100px',height:'50px;'}}>Download PDF</Button>
          </div>
          <div className="resume">
            <img src="https://user-images.githubusercontent.com/25589910/36648239-a35f14e0-1a5e-11e8-8b14-9f236b63deb8.png" className="resumeToPrint" media="print"></img>
          </div>
          <div></div>
      </div>
    );
  }
}

export default Resume;
