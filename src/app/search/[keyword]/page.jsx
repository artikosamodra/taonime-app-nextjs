// [keyword] folder = initial for search input (/"input text") >> check in param
// this Search hit endpoint TopAnime Fetch API
"use client";
import AnimeList from "../../../component/AnimeList/AnimeList";
import Header from "../../../component/AnimeList/Header";
import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Search = ({ params }) => {
  //get query from input
  const { keyword } = params; //same of >> const keyword = params/keyword
  const [decodedKeyword, setDecodedKeyword] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Convert char
      const decoded = decodeURIComponent(keyword);
      setDecodedKeyword(decoded);

      // Fetch data
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await response.json();
      // console.log("searchData:", data);
      setSearchData(data);
    };

    fetchData();
  }, [keyword]);

  if (!decodedKeyword || !searchData) {
    // Menampilkan loading atau pesan lainnya jika data masih diambil
    return <Loading />;
  }

  return (
    <main className="container-fluid mt-20 md:mx-10 mx-0 p-4">
      <section className="min-h-60">
        {/* SEARCH LIST */}
        <div className="mb-5">
          <Header
            title={`Pencarian untuk ${decodedKeyword}... `}
            linkTitle="Back to Home"
            linkHref="/"
          />

          <AnimeList.TopAnime api={searchData} />
        </div>
      </section>
    </main>
  );
};

export default Search;
