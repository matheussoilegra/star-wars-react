import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FilmModel } from '../../models/FilmModel';
import { SpecieModel } from '../../models/SpecieModel';
import './Species.scss';

function Specie(props: any) {
  useEffect(() => {
    loadDetails();
    loadSpecies();
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

    setDetails(films);
  };

  const [species, setSpecies] = useState([]);

  const loadSpecies = async () => {
    const response = await api.get(`species/`);
    const { results } = response.data;
    setSpecies(results);
    console.log(results);
  };

  return (
    <ul className="species-list">
      {species.map((specie: SpecieModel) => (
        <li key={specie.name} className="specie-details">
          {specie.name}
        </li>
      ))}
    </ul>
  );
}

export default Specie;
