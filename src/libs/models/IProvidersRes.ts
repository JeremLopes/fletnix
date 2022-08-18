import { IProvider } from "./IProvider";

export interface IProvidersRes {
  results: {
    FR: {
      flatrate: IProvider[];
    };
  };
}
