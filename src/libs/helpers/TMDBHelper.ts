import { IDataContent } from "../models/IHomeData";
import { IMediaDetail } from "../models/IMediaDetail";
import { IProvidersRes } from "../models/IProvidersRes";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

export class TMDBHelper {
  private static async fetchTMDB(endpoint: string) {
    return await fetch(`${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`).then((response) =>
      response.json()
    );
  }

  public static async getMedia(id: number, type: string): Promise<IMediaDetail> {
    return await this.fetchTMDB(`${type}/${id}`);
  }

  public static async getMediaProviders(id: number, type: string): Promise<IProvidersRes> {
    return await this.fetchTMDB(`${type}/${id}/watch/providers`);
  }

  public static async getHomeData(): Promise<IDataContent[]> {
    const apiResults = await Promise.all([
      TMDBHelper.fetchTMDB("trending/movie/week"),
      TMDBHelper.fetchTMDB("movie/top_rated"),
      TMDBHelper.fetchTMDB("movie/upcoming"),
      TMDBHelper.fetchTMDB("movie/now_playing"),
      TMDBHelper.fetchTMDB("trending/tv/week"),
      TMDBHelper.fetchTMDB("tv/top_rated"),
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
