import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="container-fluid bg-amber-400 fixed top-0 w-full z-10">
      <div className="flex md:flex-row flex-col justify-between item-center md:px-10 px-3 py-2 gap-2">
        <Link href="/" className="text-2xl font-bold text-center">
          <span className="text-blue-700">TAO</span>NIME
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
