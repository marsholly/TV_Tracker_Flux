import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import ViewTVList from './components/ViewTVList';
import FavoriteTVList from './components/FavoriteTVList';


render(
  <Router history = {browserHistory}>
    <Route path = '/' component = {Navbar}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path = 'view' component = {ViewTVList} />
      <Route path ='favorite' component = {FavoriteTVList} />
    </Route>
  </Router>,
  document.getElementById('root')
)
