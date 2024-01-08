import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-500 fixed top-0 w-full z-10">
      <div className="container-fluid flex  md:flex-row flex-col justify-between items-center md:mx-10 mx-3 md:p-4 p-2 gap-2">
        <Link href="/" className="text-white text-2xl font-bold">
          <span className="text-red-300">TAO</span>NIME
        </Link>
        <div className="flex justify-center items-center md:w-80 w-full">
          <input placeholder="Cari Anime..." className="search-input p-1" />
          <button className="bg-stone-800 hover:bg-stone-600 text-white font-bold md:text-md text-sm p-2 rounded">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;