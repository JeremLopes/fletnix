import { useEffect, useState } from "react";
import { DateHelper } from "../../../../helpers/DateHelper";
import { TMDBHelper } from "../../../../helpers/TMDBHelper";
import { IProvider } from "../../../../models/IProvider";
import { IProvidersRes } from "../../../../models/IProvidersRes";
import { ISerie } from "../../../../models/ISerie";
import MediaHeader from "../media-header/media-header";
import Providers from "../providers/providers";

function SerieDetail(props: { serie: ISerie }) {
  const { serie } = props;
  const [providers, setProviders] = useState<IProvider[]>([]);
  const note = serie.vote_average.toPrecision(2);

  useEffect(() => {
    TMDBHelper.getMediaProviders(serie.id, "tv").then((providersRes: IProvidersRes) =>
      setProviders(providersRes.results?.FR?.flatrate ?? [])
    );
  }, []);

  return (
    <>
      <MediaHeader media={serie} />

      <div className="p-3 mt-5 mb-10 mx-auto max-w-screen-lg">
        <div className="w-full mb-2 flex justify-between font-title">
          <div>
            <span>{DateHelper.dateToString(new Date(serie.first_air_date))}</span>
            <span className="mx-2">-</span>
            <span>{DateHelper.dateToString(new Date(serie.last_air_date))}</span>
          </div>

          <span>
            {note} <span className="text-primary-300">/10</span>
          </span>
        </div>

        <Providers providers={providers} className="mb-4" />

        <div>
          <h2 className="font-title mb-2">Résumé</h2>
          <p className="text-justify text-sm sm:text-base">{serie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default SerieDetail;
