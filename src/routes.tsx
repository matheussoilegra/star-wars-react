import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FilmDetails from './pages/FilmDetails/FilmDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/films/:id" component={FilmDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
