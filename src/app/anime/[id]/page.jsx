import Header from "@/app/component/AnimeList/Header";
import Link from "next/link";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/app/component/Utilities/VideoPlayer";
import AnimeInfo from "@/app/component/Utilities/AnimeInfo";

//params = default, id from fetch api JIKAN
const Page = async ({ params: { id } }) => {
  const detail = await getAnimeResponse(`anime/${id}`);
  // console.log(detail);

  return (
    <section className="container-fluid mt-20 md:mx-10 mx-0 p-4">
      <Header
        title={`Detail Anime : ${detail.data.title} || Rank#${detail.data.rank} `}
        linkTitle=""
        linkHref=""
      />
      <div>
        <div className="flex md:flex-row flex-col gap-10">
          <div>
            <Image
              src={detail.data.images.webp.image_url}
              alt={detail.data.images.jpg.image_url}
              width={400}
              height={400}
              className="md:w-48 w-full md:h-60 h-full object-cover"
              priority={true}
            />
          </div>
          <div className="flex gap-5">
            <div className="">
              <AnimeInfo
                subInfo="English Title"
                fetchInfo={detail.data.title_english}
              />
              <AnimeInfo
                subInfo="Japanese Title"
                fetchInfo={detail.data.title_japanese}
              />
              <AnimeInfo subInfo="Year" fetchInfo={detail.data.year} />
              <AnimeInfo subInfo="Score" fetchInfo={detail.data.score} />
              <AnimeInfo
                subInfo="Genre"
                fetchInfo={detail.data.genres[0].name}
              />
              <AnimeInfo subInfo="Popular" fetchInfo={detail.data.popularity} />
              <AnimeInfo
                subInfo="All Episodes"
                fetchInfo={detail.data.episodes}
              />
              <AnimeInfo subInfo="Rating" fetchInfo={detail.data.rating} />
              <AnimeInfo subInfo="Status" fetchInfo={detail.data.status} />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>{detail.data.synopsis}</p>
        </div>
        <div>
          <button>
            <Link
              href={detail.data.synopsis}
              className="text-indigo-500 font-bold"
            >
              Official Website
            </Link>
          </button>
        </div>
        <div className="my-5 flex md:justify-start justify-center">
          <VideoPlayer youtubeId={detail.data.trailer.youtube_id} />
        </div>
      </div>
    </section>
  );
};

export default Page;
