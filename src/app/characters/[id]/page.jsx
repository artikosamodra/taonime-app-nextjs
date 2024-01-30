import { getTopCharacterAnime } from "@/libs/api-libs";
import Header from "@/app/component/AnimeList/Header";
import Link from "next/link";
import AnimeInfo from "@/app/component/Utilities/AnimeInfo";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const detailChar = await getTopCharacterAnime(`characters/${id}`); //this form link API /top/characters/

  return (
    <section className="container-fluid mt-20 md:mx-10 mx-0 p-4">
      <Header title="Character Info" linkHref="" linkTitle="" />

      <div>
        <div className="pb-10">
          <AnimeInfo subInfo="Fullname" fetchInfo={detailChar.data.name} />
          <AnimeInfo
            subInfo="Kanji Name"
            fetchInfo={detailChar.data.name_kanji}
          />
          <AnimeInfo
            subInfo="Nickname"
            fetchInfo={
              detailChar.data.nicknames && detailChar.data.nicknames.join(", ") //join = add text or char every data array
            }
          />
        </div>

        <div className="flex lg:items-start items-center gap-5 py-5 lg:flex-row flex-col">
          <Image
            src={detailChar.data.images.webp.image_url}
            alt="..."
            width={400}
            height={400}
            className="w-80 h-auto object-cover "
            priority={true}
          />
          <div>
            <p className="max-w-100">{detailChar.data.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
