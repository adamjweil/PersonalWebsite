import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import $ from 'jquery';

import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" render={ () => <Home /> } />
              <Route path="/Projects" render={ () => <Projects /> } />
              <Route path="/Contact" render={ () => <Contact /> } />
            </Switch>
          </div>
      </BrowserRouter>

    );
  }
}

export default App;
