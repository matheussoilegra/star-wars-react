import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { StarshipModel } from '../../models/StarshipModel';
import './Starships.scss';

function Starship() {
  useEffect(() => {
    loadStarship();
  }, []);

  const [starships, setStarships] = useState([]);

  const loadStarship = async () => {
    const response = await api.get(`starships/`);
    const { results } = response.data;
    setStarships(results);
  };

  return (
    <ul className="starships-list">
      {starships.map((starship: StarshipModel) => (
        <li key={starship.name} className="starship-details">
          {starship.name}
        </li>
      ))}
    </ul>
  );
}

export default Starship;
