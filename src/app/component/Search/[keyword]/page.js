// [keyword] folder = initial for search input (/"input text") >> check in param
// this Search hit endpoint TopAnime Fetch API
"use client"
import AnimeFetch from "@/app/FetchAPI/FetchAPI";
import AnimeList from "../../AnimeList/AnimeList";
import Header from "../../AnimeList/Header";
import { useEffect } from "react";

const Search = async ({ params }) => {
  //get query from input
  const { keyword } = params; //same of >> const keyword = params/keyword

  //convert char
  const decodedKeyword = decodeURIComponent(keyword);
  useEffect(() => {
    console.log(decodedKeyword);
  }, [decodedKeyword]);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const SearchData = await response.json();

  return (
    <main className="container-fluid mt-20 md:mx-10 mx-0 p-4">
      <section>
        {/* SEARCH LIST */}
        <div className="mb-5">
          <Header
            title={`Pencarian untuk ${decodedKeyword}... `}
            linkTitle=""
            linkHref=""
          />
          <AnimeList.TopAnime api={SearchData} />
        </div>
      </section>
    </main>
  );
};

export default Search;
