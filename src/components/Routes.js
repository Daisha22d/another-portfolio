import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/About'; 
import Resume from '../pages/Resume';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Routes;
