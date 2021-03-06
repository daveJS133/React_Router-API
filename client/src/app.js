import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {render} from 'react-dom';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import People from './components/People.jsx';
import Ships from './components/Ships.jsx';


window.onload = () => {
  render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        
        <Route path="people" component={People} />
        <Route path="ships" component={Ships} />

      </Route>
    </Router>,
    document.getElementById('app')
  );
}