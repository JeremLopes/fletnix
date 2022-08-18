import { useEffect, useState } from "react";
import { DateHelper } from "../../../../helpers/DateHelper";
import { TMDBHelper } from "../../../../helpers/TMDBHelper";
import { IMovie } from "../../../../models/IMovie";
import { IProvider } from "../../../../models/IProvider";
import { IProvidersRes } from "../../../../models/IProvidersRes";
import MediaHeader from "../media-header/media-header";
import Providers from "../providers/providers";

function MovieDetail(props: { movie: IMovie }) {
  const { movie } = props;
  const [providers, setProviders] = useState<IProvider[]>([]);
  const note = movie.vote_average.toPrecision(2);
  const duree = DateHelper.getMinutesAndHours(movie.runtime);

  useEffect(() => {
    TMDBHelper.getMediaProviders(movie.id, "movie").then((providersRes: IProvidersRes) =>
      setProviders(providersRes.results?.FR?.flatrate ?? [])
    );
  }, []);

  return (
    <>
      <MediaHeader media={movie} />

      <div className="p-3 mt-5 mb-10 mx-auto max-w-screen-lg">
        <div className="w-full mb-2 flex justify-between font-title">
          <div>
            <span className="mr-4">{DateHelper.dateToString(new Date(movie.release_date))}</span>
            <span>
              {duree.hours}
              <span className="text-primary-300">h</span>
              {duree.minutes}
            </span>
          </div>

          <span>
            {note} <span className="text-primary-300">/10</span>
          </span>
        </div>

        <Providers providers={providers} className="mb-4" />

        <div>
          <h2 className="font-title text-2xl mb-2">Résumé</h2>
          <p className="text-justify text-sm sm:text-base">{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
