import { IDataContent } from "../models/IHomeData";
import { IMediaDetail } from "../models/IMediaDetail";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

export class TMDBApi {
  private static async fetchMovies(endpoint: string) {
    return await fetch(`${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`).then((response) =>
      response.json()
    );
  }

  public static async getMedia(id: number, type: string): Promise<IMediaDetail> {
    return await this.fetchMovies(`${type}/${id}`);
  }

  public static async getHomeData(): Promise<IDataContent[]> {
    const apiResults = await Promise.all([
      TMDBApi.fetchMovies("trending/movie/week"),
      TMDBApi.fetchMovies("movie/top_rated"),
      TMDBApi.fetchMovies("movie/upcoming"),
      TMDBApi.fetchMovies("movie/now_playing"),
      TMDBApi.fetchMovies("trending/tv/week"),
      TMDBApi.fetchMovies("tv/top_rated"),
    ]);

    return [
      {
        title: "Films tendances de la semaine",
        type: "movie",
        endpoint: "trending/movie/week",
        results: apiResults[0].results,
      },
      {
        title: "Films les mieux notés",
        type: "movie",
        endpoint: "movie/top_rated",
        results: apiResults[1].results,
      },
      {
        title: "Films à venir",
        type: "movie",
        endpoint: "movie/upcoming",
        results: apiResults[2].results,
      },
      {
        title: "Films fraichement sortis",
        type: "movie",
        endpoint: "movie/now_playing",
        results: apiResults[3].results,
      },
      {
        title: "Séries tendances de la semaine",
        type: "tv",
        endpoint: "trending/tv/week",
        results: apiResults[4].results,
      },
      {
        title: "Séries les mieux notés",
        type: "tv",
        endpoint: "tv/top_rated",
        results: apiResults[5].results,
      },
    ] as IDataContent[];
  }
}
