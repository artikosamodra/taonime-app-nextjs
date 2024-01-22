//page.js
import Image from "next/image";
import Link from "next/link";
import AnimeList from "./component/AnimeList/AnimeList";
import AnimeFetch from "./FetchAPI/FetchAPI";
import Slider from "./component/Utilities/Slider";
import Header from "./component/AnimeList/Header";
import Search from "./component/Search/[keyword]/page";

const Home = async () => {
  const topData = await AnimeFetch.TopFetch();
  // const recomData = await AnimeFetch.RecomFetch();

  // console.log(topData);

  return (
    <>
      <main className="container-fluid mt-20 md:mx-10 mx-0 p-4">
        {/* RECOMMENDATIONS LIST */}
        <div className="mb-5">
          <Header title="Recommendations Anime List" linkTitle="" linkHref="" />
          <AnimeList.RecomAnime api={topData} />

          {/* <AnimeList.RecomAnime api={recomData} /> */}
        </div>

        {/* TOP LIST */}
        <div className="mb-5">
          <Header title="Top Anime List" linkTitle="Lihat Semua" linkHref="" />
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
