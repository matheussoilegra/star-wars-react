import { SpecieModel } from './SpecieModel';
import { StarshipModel } from './StarshipModel';
import { VehicleModel } from './VehicleModel';
import { CharacterModel } from './CharacterModel';
import { PlanetModel } from './PlanetModel';

export interface FilmModel {
  results: any;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: SpecieModel[];
  starships: StarshipModel[];
  vehicles: VehicleModel[];
  characters: CharacterModel[];
  planets: PlanetModel[];
  url: string;
  edited: string;
}
