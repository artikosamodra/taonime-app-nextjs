//page.js
import Image from "next/image";
import Link from "next/link";
import AnimeList from "./component/AnimeList/TopAnime";
import AnimeFetch from "./FetchAPI/FetchAPI";
import Slider from "./component/Utilities/Slider";

const Home = async () => {
  const topData = await AnimeFetch.TopFetch();
  // const recomData = await AnimeFetch.RecomFetch();

  console.log(topData);

  return (
    <main className="container-fluid mt-20 md:mx-10 mx-0 p-4">
      {/* RECOMMENDATIONS LIST */}
      <div className="mb-5">
        <div className="pb-2">
          <h1 className="font-bold text-lg">Recommendation Anime List</h1>
        </div>
        <div>
          <Slider />
        </div>
      </div>

      {/* TOP LIST */}
      <div className="mb-5">
        <div className="flex justify-between pb-2">
          <h1 className="font-bold text-lg">Top Anime List</h1>
          <Link href="" className="font-bold underline text-blue-400">
            Lihat Semua
          </Link>
        </div>
        <div>
          <AnimeList api={topData} />
        </div>
      </div>

      <div>AAAA</div>
    </main>
  );
};

export default Home;
