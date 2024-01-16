// [keyword] folder = initial for search input (/"input text") >> check in param
// this Search hit endpoint TopAnime Fetch API

import AnimeFetch from "@/app/FetchAPI/FetchAPI";
import AnimeList from "../../AnimeList/AnimeList";
import Header from "../../AnimeList/Header";

const Search = async ({ params }) => {
  //get query from input
  const {keyword} = params //same of >> const keyword = params/keyword

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const SearchData = await response.json();

  return (
    <section>
      {/* TOP LIST */}
      <div className="mb-5">
        <Header title="Pencarian " linkTitle="Lihat Semua" linkHref="" />
        <AnimeList.TopAnime api={SearchData} />
      </div>
    </section>
  );
};

export default Search;
