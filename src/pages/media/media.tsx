import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBApi } from "../../api/TMDBApi";
import MediaDetail from "../../libs/ui/components/media-detail/media-detail";
import { IMediaDetail } from "../../models/IMediaDetail";

function Media() {
  const { type, id } = useParams();
  const [media, setMedia] = useState<IMediaDetail>();

  useEffect(() => {
    if (type && id) TMDBApi.getMedia(+id, type).then((media: IMediaDetail) => setMedia(media));
  }, []);

  if (!media) return null;
  return <MediaDetail media={media} />;
}

export default Media;
