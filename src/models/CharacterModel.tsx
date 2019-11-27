import { FilmModel } from './FilmModel';
import { SpecieModel } from './SpecieModel';
import { StarshipModel } from './StarshipModel';
import { VehicleModel } from './VehicleModel';

export interface CharacterModel {
  results: any;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: FilmModel[];
  species: SpecieModel[];
  starships: StarshipModel[];
  vehicles: VehicleModel[];
  url: string;
  created: string;
  edited: string;
}
