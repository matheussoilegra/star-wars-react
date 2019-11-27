import React, { Component, useState, useEffect } from 'react';
import api from '../../services/api';
import { FilmModel } from '../../models/film';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Home.scss';

function Film() {
  useEffect(() => {
    loadFilm();
  }, []);

  const [films, setFilm] = useState([]);

  const loadFilm = async () => {
    const response = await api.get('films/');
    const { results } = response.data;
    setFilm(results);
  };

  return (
    <ul>
      {films.map((film: FilmModel) => (
        <li key={film.episode_id}>
          <BrowserRouter>
            <Switch>
              <Link to={`/films/${film.episode_id}`}>
                Episode {film.episode_id} - {film.title}
              </Link>
            </Switch>
          </BrowserRouter>
        </li>
      ))}
    </ul>
  );
}

export default Film;
