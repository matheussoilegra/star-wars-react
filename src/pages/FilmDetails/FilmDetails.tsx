import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './FilmDetails.scss';
import { FilmModel } from '../../models/FilmModel';
//import { Link } from 'react-router-dom';
import { CharacterModel } from '../../models/CharacterModel';

export default function FilmDetails(props: any) {
  const [details, setDetails] = useState();
  const [charactersDetails, setCharactersDetails] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const loadDetails = async () => {
      const response = await api.get(`films/`);
      const { results } = response.data;
      const films = results.find((film: FilmModel) => {
        return `${film.episode_id}` === `${props.match.params.id}`;
      });

      setDetails(films);
    };

    loadDetails();
  }, []);

  useEffect(() => {
    const buildCharactersPath = () => {
      if (!details) {
        return;
      }

      const charactersPath = details.characters.map(
        (character: CharacterModel) => {
          const charPath = character.toString().substr(21);
          return charPath;
        }
      );

      setCharactersDetails(charactersPath);
    };

    buildCharactersPath();
  }, [details]);

  useEffect(() => {
    const loadCharacters = async () => {
      if (!charactersDetails) {
        return;
      }

      const characters = charactersDetails.map(async (character: string) => {
        const response = await api.get(character);
        const { data } = response;

        setCharacters((state: []) => [...state, data]);
        return data;
      });

      setCharacters(characters);
    };

    loadCharacters();
  }, [charactersDetails]);

  return (
    <div className="characters-details">
      <ul className="characters-list">
        {characters &&
          characters.map((character: CharacterModel) => (
            <div className="character-details" key={character.url}>
              <li className="character-item" key={character.name}>
                {typeof character.name !== 'undefined'
                  ? 'Name: ' + character.name
                  : ''}
              </li>
              <li className="character-item" key={character.birth_year}>
                {typeof character.birth_year !== 'undefined'
                  ? 'Birth year: ' + character.birth_year
                  : ''}
              </li>
              <li className="character-item" key={character.gender}>
                {typeof character.gender !== 'undefined'
                  ? 'Gender: ' + character.gender
                  : ''}
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
