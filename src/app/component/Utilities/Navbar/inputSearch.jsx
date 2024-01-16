"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(); //init input text
  const router = useRouter(); //using router/nav = project in app folder

  //hadling Search Action
  const handleInput = (event) => {
    event.preventDefault();
    // alert(searchRef.current.value);

    const keyword = searchRef.current.value;
    router.push(`./component/Search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="w-full p-1 rounded-md"
        ref={searchRef}

        //useRef method can use onChange like this.
        //onChange={(event) => setinputSearch(event.target.value)}
      />
      <button className="absolute top-1 end-2" onClick={handleInput}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
