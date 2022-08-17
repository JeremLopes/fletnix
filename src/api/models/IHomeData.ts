import { IMedia } from "../../libs/ui/components/media-section/mediaSection";

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
