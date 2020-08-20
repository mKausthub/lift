/*
 * dev/App.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MetisMenu from '../src';
import Home from '../src/components/Home';
import Workout from '../src/components/Workout';
import Juggernaut from '../src/components/Juggernaut';
import Sheiko from '../src/components/Sheiko';
import Riptoe from '../src/components/Riptoe';


// Embeds styles
import '../less/standart.less';


const menu1 = [
  {
    id: 1,
    icon: 'dashboard',
    label: 'Home',
    to: '/',
  },
  {
    id: 2,
    icon: 'bolt',
    label: 'Workout',
    class: 'second-menu',
    content: [
      {
        id: 3,
        icon: 'bolt',
        label: 'Juggernaut',
        to: '/workout-juggernaut',
      },
      {
        id: 4,
        icon: 'bolt',
        label: 'Sheiko',
        to: '/workout-sheiko',
      },
      {
        id: 5,
        icon: 'bolt',
        label: 'Mark Riptoe',
        to: '/workout-riptoe',
      },
    ],
  }
];


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: menu1,
      toggled: false,
      isMobile: window.innerWidth < 991,
      isLoggedIn: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleClass = this.toggleClass.bind(this);

  }

  toggleMenu() {
    this.toggleClass(this.state.toggled);
    this.setState({
      toggled: !this.state.toggled
    });
  }

  toggleClass(state) {
    let menu = document.getElementsByClassName('menu')[0];
    let body = document.getElementsByClassName('body')[0];
    let toggleMenu = document.getElementsByClassName('toggle-menu')[0];
    if(state) {
      menu.classList.remove('toggled');
      body.classList.remove('toggled-body');
      toggleMenu.classList.remove('toggled-menu');
    } else {
      menu.classList.add('toggled');
      body.classList.add('toggled-body');
      toggleMenu.classList.add('toggled-menu');
    }
  }

  render() {
    const toggleClass = this.state.isMobile ? " menu toggled" : "menu";
    const bodyClass = this.state.isMobile ? "body toggled-body" : "body";
    const toggleMenuClass = this.state.isMobile ? "toggle-menu toggled-menu" : "toggle-menu";
    return (
        <div>
        <MetisMenu
          ref={(r) => { this.menu = r; }}
          activeLinkFromLocation
          activeLinkLabel={this.state.activeLinkLabel}
          activeLinkId={this.state.activeLinkId}
          classNameItemHasVisibleChild="open"
          content={this.state.menu}
          className={toggleClass}
          id="metisMenu"
        />
        
        <div className={bodyClass}>
          <div className={toggleMenuClass} clicked={toggleClass} onClick={this.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/workout">
                <Workout />
              </Route>
              <Route path="/workout-juggernaut">
                <Juggernaut />
              </Route>
              <Route path="/workout-sheiko">
                <Sheiko />
              </Route>
              <Route path="/workout-riptoe">
                <Riptoe />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
