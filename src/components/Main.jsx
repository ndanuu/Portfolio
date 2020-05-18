import React, { Component } from 'react';
import HomePage from "./HomePage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

class Main extends Component {
  state = { 
    title: 'Lisbeth Mbuvi',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Be Relentless',
      subTitle: 'Projects that make a difference',
      text: 'Checkout my projects below'
    },
    about: {
      title: 'About Me'
    },
    contact: {
      title: 'Let\'s Talk'
    }
   }
  render() { 
    return ( 
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
      <Route exact path="/projects" component={Projects} />

      
    </Switch>

     );
  }
}
 
export default Main;
  