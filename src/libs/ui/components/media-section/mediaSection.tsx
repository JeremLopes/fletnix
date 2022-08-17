export interface IMediaSectionProps {
  title: string;
  items: IMedia[];
  className?: string;
}

export interface IMedia {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export function MediaSection(props: IMediaSectionProps) {
  const { title, items, className } = props;

  return (
    <div className={className}>
      <h2 className="font-title text-xl mb-3">{title}</h2>
      <div className="flex gap-5 overflow-scroll">
        {items.map((item) => (
          <div key={item.id} className="h-48 min-w-[128px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaSection;
