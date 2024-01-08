//ANIMELIST.js
import Image from "next/image";
import Link from "next/link";

// Card Setting Top List
const TopList = ({ title, images, id }) => {
  return (
    <main>
      <Link href={`/${id}`} className="cursor-pointer">
        <div className="">
          <Image
            src={images}
            alt="..."
            width={400}
            height={400}
            className="img-toplist"
          />
        </div>
        <h3 className="font-bold lg:text-lg md:text-md text-sm p-3">{title}</h3>
      </Link>
    </main>
  );
};

const RecomList = ({ title, images, id }) => {
  return (
    <main>
      <Link href={`/${id}`} className="cursor-pointer">
        <Image src={images} alt="..." width={400} height={400} />
        <h3 className="font-bold lg:text-lg md:text-md text-sm p-3 title">
          {title}
        </h3>
      </Link>
    </main>
  );
};

const AnimeList = { TopList, RecomList };
export default AnimeList;
