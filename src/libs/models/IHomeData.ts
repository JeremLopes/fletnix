import { IMedia } from "./IMedia";

export interface IHomeData {
  moviesContent: IDataContent[];
  seriesContent: IDataContent[];
}

export interface IDataContent {
  title: string;
  type: string;
  endpoint: string;
  results: IMedia[];
}
