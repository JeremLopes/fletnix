import { IMedia } from "./IMedia";

export interface IMediaDetail extends IMedia {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  tagline: string;
}
