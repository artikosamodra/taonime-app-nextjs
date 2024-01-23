import Header from "@/app/component/AnimeList/Header";
import Link from "next/link";
import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

//params = default, id from fetch api JIKAN
const Page = async ({ params: { id } }) => {
  const detail = await getAnimeResponse(`anime/${id}`);
  console.log(detail);

  return (
    <section className="mt-24">
      <Header
        title={`Detail Anime : ${detail.data.title} || Rank#${detail.data.rank} `}
        linkTitle=""
        linkHref=""
      />
      <div>
        <div className="flex gap-10">
          <div>
            <Image
              src={detail.data.images.webp.image_url}
              alt={detail.data.images.jpg.image_url}
              width={400}
              height={400}
              className="w-48 h-60 object-cover"
              priority={true}
            />
          </div>

          <div className="flex gap-5">
            <div className="">
              <div>Title</div>
              <div>Year</div>
              <div>Score</div>
              <div>Genre</div>
              <div>Popular</div>
              <div>All Episodes</div>
              <div>Rating</div>
              <div>Status</div>
            </div>
            <div>
              <div>
                : {detail.data.title_english} / ( {detail.data.title_japanese} )
              </div>
              <div>: {detail.data.year}</div>
              <div>: {detail.data.score}</div>
              <div>: {detail.data.genres[0].name}</div>
              <div>: {detail.data.popularity}</div>
              <div>: {detail.data.episodes}</div>
              <div>: {detail.data.rating}</div>
              <div>: {detail.data.status}</div>
            </div>
            {/* <table className="flex w-full">
              <tb className="">
                <tr>Title</tr>
                <tr>Year</tr>
                <tr>Score</tr>
                <tr>Genre</tr>
                <tr>Popular</tr>
                <tr>All Episodes</tr>
                <tr>Rating</tr>
                <tr>Status</tr>
              </tb>
              <tb>
                <tr>
                  : {detail.data.title_english} / ( {detail.data.title_japanese}{" "}
                  )
                </tr>
                <tr>: {detail.data.year}</tr>
                <tr>: {detail.data.score}</tr>
                <tr>: {detail.data.genres[0].name}</tr>
                <tr>: {detail.data.popularity}</tr>
                <tr>: {detail.data.episodes}</tr>
                <tr>: {detail.data.rating}</tr>
                <tr>: {detail.data.status}</tr>
              </tb>
            </table> */}
          </div>
        </div>
        <div>
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
        <div>Trailer</div>
      </div>
    </section>
  );
};

export default Page;
