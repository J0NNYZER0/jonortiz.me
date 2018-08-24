import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Skillsets from './components/pages/Skillsets';
import Education from './components/pages/Education';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="experience" component={Experience}/>
    <Route path="skillsets" component={Skillsets}/>
    <Route path="education" component={Education}/>
    <Route path="resume" component={Resume}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
