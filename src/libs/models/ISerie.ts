import { IMediaDetail } from "./IMediaDetail";

export interface ISerie extends IMediaDetail {
  first_air_date: string;
  last_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  seasons: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    air_date: string;
    episode_count: number;
    season_number: number;
  }[];
}
