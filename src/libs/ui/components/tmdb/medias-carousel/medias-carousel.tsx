import { Link } from "react-router-dom";
import { IMedia } from "../../../../models/IMedia";

interface IMediaSectionProps {
  title: string;
  type: string;
  items: IMedia[];
  className?: string;
}

export function MediasCarousel(props: IMediaSectionProps) {
  const { title, type, items, className } = props;

  return (
    <div className={className}>
      <h2 className="font-title text-xl mb-3">{title}</h2>
      <div className="flex gap-5 overflow-scroll">
        {items.map((item) => (
          <Link key={item.id} className="h-48 min-w-[128px]" to={`/media/${type}/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title ?? item.name}
              className="h-full rounded-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MediasCarousel;
