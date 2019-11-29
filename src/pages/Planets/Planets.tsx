import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { PlanetModel } from '../../models/PlanetModel';
import './Planets.scss';

function Planet() {
  useEffect(() => {
    loadPlanets();
  }, []);

  const [planets, setPlanets] = useState([]);

  const loadPlanets = async () => {
    const response = await api.get(`planets/`);
    const { results } = response.data;
    setPlanets(results);
  };

  return (
    <ul className="planets-list">
      {planets.map((planet: PlanetModel) => (
        <li key={planet.name} className="planet-details">
          {planet.name}
        </li>
      ))}
    </ul>
  );
}

export default Planet;
