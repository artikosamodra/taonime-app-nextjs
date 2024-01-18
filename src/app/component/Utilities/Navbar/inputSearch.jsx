"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(); //init input text
  const router = useRouter(); //using router/nav = project in app folder

  //===========CODE SERACH HANDLING=============
  /*hadling Search Function using clik 
  const handleInput = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/component/Search/${keyword}`);
  };

  //handling Serach using Enter Key
  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleInput(event);
    }
  }; */

  //===========SEARCH HANDLING SIMPLIFIED=============
  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/component/Search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="w-full p-1 rounded-md"
        ref={searchRef}
        onKeyDown={handleSearch}

        //useRef method can use onChange like this.
        //onChange={(event) => setinputSearch(event.target.value)}
      />
      <button className="absolute top-1 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
