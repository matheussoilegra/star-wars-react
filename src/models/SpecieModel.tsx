import { FilmModel } from './FilmModel';
import { CharacterModel } from './CharacterModel';

export interface SpecieModel {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: CharacterModel[];
  films: FilmModel[];
  url: string;
  created: string;
  edited: string;
}
