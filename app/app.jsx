import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'home';
import mainContent from 'homeContent';
import About from 'about';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
        <IndexRoute component={mainContent}/>
        <Route path='about' component={About}/>
   </Route>
  </Router>,
  document.getElementById('app')
);
