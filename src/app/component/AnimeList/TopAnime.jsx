//ANIMELIST.js
import Image from "next/image";
import Link from "next/link";

// Card Setting Top List
const TopAnime = ({ api }) => {
  return (
    <main>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
        {api.data.map((data) => {
          return (
            <Link href={`/${data.mal_id}`} className="cursor-pointer">
              <div className="">
                <Image
                  src={data.images.webp.image_url}
                  alt="..."
                  width={400}
                  height={400}
                  className="img-toplist"
                />
              </div>
              <h3 className="font-bold lg:text-lg md:text-md text-sm p-3">
                {data.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </main>
  );
};


export default TopAnime;