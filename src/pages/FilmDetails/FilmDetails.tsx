import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './FilmDetails.scss';
import { FilmModel } from '../../models/FilmModel';

export default function FilmDetails(props: any) {
  useEffect(() => {
    loadDetails();
  }, []);

  const [details, setDetails] = useState({
    episode_id: '',
    title: '',
    producer: '',
    director: '',
    release_date: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: []
  });

  const loadDetails = async () => {
    const response = await api.get(`films/`);
    const { results } = response.data;

    const films = results.find((film: FilmModel) => {
      return `${film.episode_id}` === `${props.match.params.id}`;
    });

    console.log(films.episode_id);
    console.log(films.title);

    setDetails(films);
  };

  return (
    <ul className="film-details">
      <li>{`Episode ${details.episode_id} - ${details.title}`}</li>
      <li>{`Producer ${details.producer}`}</li>
      <li>{`Director ${details.director}`}</li>
      <li>{`Release_date ${details.release_date}`}</li>
      <li>Characters</li>
      <li>Planets</li>
      <li>Starships</li>
      <li>Vehicles</li>
      <li>Species</li>
    </ul>
  );
}
