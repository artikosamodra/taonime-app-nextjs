//page.js
import Image from "next/image";
import Link from "next/link";
import AnimeList from "../component/AnimeList/AnimeList";
import AnimeFetch from "../libs/FetchAPI";
import Slider from "../component/Slider";
import Header from "../component/AnimeList/Header";
import Search from "./search/[keyword]/page";
import { getNestedAnimeResponse } from "../libs/api-libs";

const Home = async () => {
  const topData = await AnimeFetch.TopFetch();
  let recomData = await getNestedAnimeResponse("recommendations/anime");
  const shuffledData = recomData.data.sort(() => Math.random() - 0.5); //random setting recomAnime
  const slicedData = { data: shuffledData.slice(0, 12) }; //slice data, display 0 until 12.

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
            <div className="rounded-xl py-5 bg-rose-200 grid place-items-center">
              <Header title="Hot This Season" linkTitle="" linkHref="" />
              <ul>
                <li>Lorem Lorem lorem</li>
                <li>Lorem Lorem lorem</li>
                <li>Lorem Lorem lorem</li>
                <li>Lorem Lorem lorem</li>
              </ul>
            </div>
            <div className="rounded-xl py-5 bg-teal-300 grid place-items-center">
              <Header title="Hot Character" linkTitle="" linkHref="" />
              <ul>
                <li>Lorem Lorem lorem</li>
                <li>Lorem Lorem lorem</li>
                <li>Lorem Lorem lorem</li>
                <li>Lorem Lorem lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
