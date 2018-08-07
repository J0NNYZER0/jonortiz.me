import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="resume" component={Resume}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
