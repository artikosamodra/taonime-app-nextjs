//ANIMELIST.js
import Image from "next/image";
import Link from "next/link";
import Slider from "../Slider";

// Card Setting Top List
const TopAnime = ({ api }) => {
  return (
    <section>
      <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 gap-2">
        {/* '?' from data? = if have data, render now. if not data, waiting. */}
        {api.data?.map((data, index) => {
          return (
            // index is callback, key also can use 'data.mal_id'
            <Link
              href={`/anime/${data.mal_id}`}
              className="cursor-pointer"
              key={index}
            >
              <div className="">
                <Image
                  src={data.images.webp.image_url}
                  alt="..."
                  width={400}
                  height={400}
                  className="img-toplist"
                  priority={true}
                />
              </div>
              <h3 className="font-bold lg:text-lg md:text-md text-sm p-3">
                {data.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const RecomAnime = ({ api }) => {
  return (
    <section>
      <div>
        <Slider dataSlider={api} />
      </div>
    </section>
  );
};

const SeasonsAnime = ({ api }) => {
  return (
    <section>
      <div className="px-5">
        {api.data?.sort((a, b) => a.rank - b.rank).map((data, index) => {
          return (
            // index is callback, key also can use 'data.mal_id'
            <Link
              href={`/anime/${data.mal_id}`}
              className="cursor-pointer"
              key={index}
            >
              <h3 className="font-bold lg:text-lg md:text-md text-sm p-1 text-blue-800 hover:text-indigo-500">
                {data.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const TopCharacterAnime = ({ api }) => {
  return (
    <section>
      <div className="px-5">
        {api.data?.map((data, index) => {
          return (
            // index is callback, key also can use 'data.mal_id'
            <Link
              href={`/characters/${data.mal_id}`}
              className="cursor-pointer"
              key={index}
            >
              <h3 className="font-bold lg:text-lg md:text-md text-sm p-1 text-blue-800 hover:text-indigo-500">
                {data.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const AnimeList = { TopAnime, RecomAnime, SeasonsAnime, TopCharacterAnime };
export default AnimeList;
