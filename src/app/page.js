//page.js
import Image from "next/image";
import Link from "next/link";
import AnimeList from "./AnimeList/AnimeList";
import AnimeFetch from "./FetchAPI/FetchAPI";

const Home = async () => {
  const topData = await AnimeFetch.TopFetch();
  const recomData = await AnimeFetch.RecomFetch();

  console.log(topData, recomData);

  return (
    <main className="container-fluid mt-20 md:mx-10 mx-0 p-4">
      {/* TOP LIST */}
      <div className="flex justify-between pb-2">
        <h1 className="font-bold text-lg">Top Anime List</h1>
        <Link href="" className="font-bold underline text-blue-400">
          Lihat Semua
        </Link>
      </div>

      <div className="">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
          {topData.data.map((data) => {
            return (
              <div key={data.mal_id} className="mb-5 title">
                <AnimeList.TopList
                  title={data.title}
                  images={data.images.webp.image_url}
                  id={data.mal_id}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* RECOMMENDATIONS LIST */}
      <div>
        <h1>Recommendation Anime List</h1>
      </div>
    </main>
  );
};

export default Home;
