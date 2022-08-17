import { IMediaDetail } from "../../../../models/IMediaDetail";

interface IMediaDetailProps {
  media: IMediaDetail;
}

function MediaDetail(props: IMediaDetailProps) {
  const { media } = props;

  return (
    <div>
      <div
        className="w-full h-[50vh] lg:h-[85vh] bg-center bg-cover relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent to-dark-500">
          <div className="absolute bottom-8 w-full text-center">
            <h1 className="mx-3 font-title text-xl sm:text-2xl lg:text-3xl">{media.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaDetail;
