import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => (
  <header>
    <nav>
      <ul className="main-nav" >
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Resume">Resume</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
