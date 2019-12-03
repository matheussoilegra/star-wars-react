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
    <div>
      <ul>
        {characters &&
          characters.map((character: CharacterModel) => (
            <li key={character.name}>{character.name}</li>
          ))}
      </ul>
    </div>
    // <ul className="film-details">
    //   <li>{`Episode ${details.episode_id} - ${details.title}`}</li>
    //   <li>{`Producer: ${details.producer}`}</li>
    //   <li>{`Director: ${details.director}`}</li>
    //   <li>{`Release_date: ${details.release_date}`}</li>
    //   <li>{}</li>
    //   <li>
    //     <Link to={`${details.episode_id}/people/`}>Characters</Link>
    //   </li>
    //   <li>
    //     <Link to={`${details.episode_id}/planets/`}>Planets</Link>
    //   </li>
    //   <li>
    //     <Link to={`${details.episode_id}/species/`}>Species</Link>
    //   </li>
    //   <li>
    //     <Link to={`${details.episode_id}/vehicles/`}>Vehicles</Link>
    //   </li>
    //   <li>
    //     <Link to={`${details.episode_id}/starships/`}>Starships</Link>
    //   </li>
    // </ul>
  );
}
