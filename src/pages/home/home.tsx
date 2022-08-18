import { useEffect, useState } from "react";
import { IDataContent, IHomeData } from "../../libs/models/IHomeData";
import { TMDBHelper } from "../../libs/helpers/TMDBHelper";
import Tabs, { TabProps } from "../../libs/ui/common/tabs/tabs";
import MediasCarousel from "../../libs/ui/components/tmdb/medias-carousel/medias-carousel";

function Home() {
  const [data, setData] = useState<IHomeData>();

  const tabsContent: TabProps[] = [
    {
      title: "Films",
      content: data?.moviesContent.map((dataContent: IDataContent, index: number) => (
        <MediasCarousel
          key={index}
          title={dataContent.title}
          type="movie"
          items={dataContent.results}
          className="mt-5"
        />
      )),
    },
    {
      title: "Séries",
      content: data?.seriesContent.map((dataContent: IDataContent, index: number) => (
        <MediasCarousel
          key={index}
          title={dataContent.title}
          type="tv"
          items={dataContent.results}
          className="mt-5"
        />
      )),
    },
  ];

  useEffect(() => {
    TMDBHelper.getHomeData().then((dataContents: IDataContent[]) => {
      const homeData: IHomeData = {
        moviesContent: dataContents.filter((dataContent) => dataContent.type === "movie"),
        seriesContent: dataContents.filter((dataContent) => dataContent.type === "tv"),
      };
      setData(homeData);
    });
  }, []);

  return (
    <div className="p-5">
      <h1 className="mb-5 font-title text-3xl">Accueil</h1>
      <Tabs content={tabsContent} />
    </div>
  );
}

export default Home;
