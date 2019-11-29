import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { CharacterModel } from '../../models/CharacterModel';
import { Link } from 'react-router-dom';
import './Characters.scss';

function Character() {
  useEffect(() => {
    loadCharacter();
  }, []);

  const [characters, setCharacters] = useState([]);

  const loadCharacter = async () => {
    const response = await api.get(`people/`);
    const { results } = response.data;
    setCharacters(results);
  };

  return (
    <ul className="characters-list">
      {characters.map((character: CharacterModel) => (
        <li key={character.name} className="character-details">
          {character.name}
        </li>
      ))}
    </ul>
  );
}

export default Character;
