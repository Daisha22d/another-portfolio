import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  );
};

export default Routes;
