import { IMediaDetail } from "../../../../models/IMediaDetail";
import Button, { ButtonColor, ButtonSize } from "../../../common/button/button";

function MediaHeader(props: { media: IMediaDetail }) {
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
          <div className="absolute bottom-8 w-full text-center px-2">
            <h1 className="mx-3 font-title text-xl sm:text-2xl lg:text-3xl">
              {media.title ?? media.name}
            </h1>
            <h3>{media.tagline}</h3>
            <div className="mt-2">
              {media.genres?.map((genre: { id: number; name: string }) => (
                <Button
                  key={genre.id}
                  color={ButtonColor.Dark}
                  size={ButtonSize.Very_Small}
                  className="rounded-full m-1 text-primary-300"
                >
                  {genre.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaHeader;
