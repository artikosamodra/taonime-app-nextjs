"use client"; //useState or useEffect from React
import React, { useEffect, useState } from "react";
import Loading from "../loading";

// import Header from "../component/AnimeList/Header";
import HeaderMenu from "../component/Utilities/HeaderMenu";
import Pagination from "../component/Utilities/Pagination";

import AnimeList from "../component/AnimeList/AnimeList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [TopAnime, setTopAnime] = useState([]);

  //func fetch
  const fetchTopData = async () => {
    //default page in jikan, 25 data/page
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}` //endpoint with developer "page setting"
    );
    const allTopAnime = await response.json(); //conversion data json send to state topAnime in above (setTopAnime)
    setTopAnime(allTopAnime);
  };

  useEffect(() => {
    fetchTopData(); //from fetchTopData
  }, [page]); //depedence from const page
  //useState(1) for first acces, after add value, endpoint fecth again next data

  if (TopAnime < 25) {
    // Menampilkan loading atau pesan lainnya jika data masih diambil
    return <Loading />;
  }
  return (
    <>
      <section className="container-fluid mt-20 md:mx-10 mx-0 p-4">
        {/* <Header title="All Top Anime List" linkTitle="" linkHref="" /> */}
        <HeaderMenu title={`ALL TOP ANIME - PAGE #${page}`} />

        {/* Fetching Data */}
        <AnimeList.TopAnime api={TopAnime} />

        <Pagination
          pagePagination={page}
          lastPage={TopAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </>
  );
};

export default Page;
