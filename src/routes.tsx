import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FilmDetails from './pages/FilmDetails/FilmDetails';
import Character from './pages/Characters/Characters';
import Planet from './pages/Planets/Planets';
import Vehicle from './pages/Vehicles/Vehicles';
import Specie from './pages/Species/Species';
import Starship from './pages/Starships/Starships';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/films" component={Home} />
      <Route exact path="/characters" component={Character} />
      <Route exact path="/planets" component={Planet} />
      <Route exact path="/vehicles" component={Vehicle} />
      <Route exact path="/species" component={Specie} />
      <Route exact path="/starships" component={Starship} />
      <Route exact path="/films/:id" component={FilmDetails} />
      <Route exact path="/films/:id/characters" component={Character} />
      <Route exact path="/films/:id/planets" component={Planet} />
      <Route exact path="/films/:id/vehicles" component={Vehicle} />
      <Route exact path="/films/:id/species" component={Specie} />
      <Route exact path="/films/:id/starships" component={Starship} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
