//page.js
// import Image from "next/image";
// import Link from "next/link";
import AnimeList from "./component/AnimeList/AnimeList";
import AnimeFetch from "../libs/FetchAPI";
// import Slider from "./component/Slider";
import Header from "./component/AnimeList/Header";
// import Search from "./search/[keyword]/page";
import {
  // getAnimeResponse,
  getNestedAnimeResponse,
  getNewSeasonAnimeResponse,
  getTopCharacterAnime
} from "../libs/api-libs";

const Home = async () => {
  const topData = await AnimeFetch.TopFetch();
  let recomData = await getNestedAnimeResponse("recommendations/anime");
  const shuffledData = recomData.data.sort(() => Math.random() - 0.5); //random setting recomAnime
  const slicedData = { data: shuffledData.slice(0, 12) }; //slice data, display 0 until 12.

  const seasonsData = await getNewSeasonAnimeResponse("seasons/now", "limit=10");

  const charactersData = await getTopCharacterAnime("top/characters", "limit=10");

  return (
    <>
      <main className="container-fluid mt-20 md:mx-10 mx-0 p-4">
        {/* RECOMMENDATIONS LIST */}
        <div className="mb-5">
          <Header title="Recommendations Anime List" linkTitle="" linkHref="" />
          <AnimeList.RecomAnime api={slicedData} />
        </div>

        {/* TOP LIST */}
        <div className="mb-5">
          <Header
            title="Top Anime List"
            linkTitle="Lihat Semua"
            linkHref="/populer"
          />
          <AnimeList.TopAnime api={topData} />
        </div>

        {/* HOT SEASON LIST */}
        <div className="">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="rounded-xl py-5 bg-rose-200 flex flex-col justify-center">
              <div className="grid grid-cols-1 place-items-center">
                <Header title="Anime: This Seasons" linkTitle="" linkHref="" />
              </div>
              <AnimeList.SeasonsAnime api={seasonsData} />
            </div>
            <div className="rounded-xl bg-teal-300 flex flex-col pt-5">
              <div className="grid grid-cols-1 place-items-center">
                <Header
                  title="Top 10: Character Anime"
                  linkTitle=""
                  linkHref=""
                />
              </div>
              <AnimeList.TopCharacterAnime api={charactersData} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
