import { IProvider } from "../../../../models/IProvider";

function Providers(props: { providers: IProvider[]; className?: string }) {
  const { providers, className } = props;

  if (providers.length === 0) return null;
  else
    return (
      <div className={className}>
        <h2 className="font-title mb-2">Disponible sur</h2>

        <div className="flex gap-2">
          {providers.map((provider: IProvider) => (
            <div
              key={provider.provider_id}
              className="w-12 rounded border-solid border-primary-300 border-2"
            >
              <img src={`https://image.tmdb.org/t/p/w300${provider.logo_path}`} className="" />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Providers;
