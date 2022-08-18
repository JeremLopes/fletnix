import { IMediaDetail } from "./IMediaDetail";

export interface IMovie extends IMediaDetail {
  runtime: number;
  release_date: string;
}
