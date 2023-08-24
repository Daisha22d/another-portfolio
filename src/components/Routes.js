import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutMe from "../pages/About";
import Resume from "../pages/Resume";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
      <Route path={`${process.env.PUBLIC_URL}/aboutme`} component={AboutMe} />
      <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
    </Switch>
  );
};

export default Routes;
