import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBHelper } from "../../libs/helpers/TMDBHelper";
import { IMediaDetail } from "../../libs/models/IMediaDetail";
import { IMovie } from "../../libs/models/IMovie";
import { ISerie } from "../../libs/models/ISerie";
import MovieDetail from "../../libs/ui/components/tmdb/movie-detail/movie-detail";
import SerieDetail from "../../libs/ui/components/tmdb/serie-detail/serie-detail";

function Media() {
  const { type, id } = useParams();
  const [media, setMedia] = useState<IMediaDetail>();

  useEffect(() => {
    if (type && id) TMDBHelper.getMedia(+id, type).then((media: IMediaDetail) => setMedia(media));
  }, []);

  if (!media) {
    return <div>Aucun résultat</div>;
  } else if (type === "movie") {
    return <MovieDetail movie={media as IMovie} />;
  } else {
    return <SerieDetail serie={media as ISerie} />;
  }
}

export default Media;
