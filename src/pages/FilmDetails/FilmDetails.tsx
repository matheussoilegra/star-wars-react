import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './FilmDetails.scss';
import { FilmModel } from '../../models/FilmModel';
import { Link } from 'react-router-dom';
import { CharacterModel } from '../../models/CharacterModel';

export default function FilmDetails(props: any) {
  useEffect(() => {
    loadDetails();
    loadCharacters();
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

  const [characters, setCharacters] = useState([]);

  const loadDetails = async () => {
    const response = await api.get(`films/`);
    const { results } = response.data;

    const films = results.find((film: FilmModel) => {
      return `${film.episode_id}` === `${props.match.params.id}`;
    });
    setDetails(films);
  };

  const loadCharacters = async () => {
    const response = await api.get(`people/`);
    const { results } = response.data;

    const characters = results.filter((character: CharacterModel) => {
      if (character.films.toString().includes(`${window.location.pathname}`)) {
        return `${character.name}`;
      }
    });

    setCharacters(characters);
  };

  return (
    <ul className="film-details">
      <li>{`Episode ${details.episode_id} - ${details.title}`}</li>
      <li>{`Producer: ${details.producer}`}</li>
      <li>{`Director: ${details.director}`}</li>
      <li>{`Release_date: ${details.release_date}`}</li>
      <ul>
        {characters.map((character: CharacterModel) => (
          <li key={character.name} className="character-name">
            {`${character.name}`}
          </li>
        ))}
      </ul>

      <li>
        <Link to={`${details.episode_id}/people/`}>Characters</Link>
      </li>
      <li>
        <Link to={`${details.episode_id}/planets/`}>Planets</Link>
      </li>
      <li>
        <Link to={`${details.episode_id}/species/`}>Species</Link>
      </li>
      <li>
        <Link to={`${details.episode_id}/vehicles/`}>Vehicles</Link>
      </li>
      <li>
        <Link to={`${details.episode_id}/starships/`}>Starships</Link>
      </li>
    </ul>
  );
}
