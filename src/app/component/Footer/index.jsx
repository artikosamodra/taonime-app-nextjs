import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TelegramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const { default: Image } = require("next/image");

const Footer = () => {
  return (
    <footer className="bg-amber-400">
      <div className="mx-10">
        <h1 className="font-bold text-lg pt-5 pb-10 text-center">
          Social Media
        </h1>
        {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-5"> */}
        <div className="flex flex-wrap justify-center gap-10">
          <Link href="/">
            <div className="flex justify-center items-center gap-2 mx-2 w-60 px-5 py-2 bg-amber-200 hover:bg-amber-100 rounded-lg shadow-lg border border-black">
              <InstagramLogo size={52} /> Instagram
            </div>
          </Link>

          <Link href="/">
            <div className="flex justify-center items-center gap-2 mx-2 w-60 px-5 py-2 bg-amber-200 hover:bg-amber-100 rounded-lg shadow-lg border border-black">
              <FacebookLogo size={52} /> Fanspage
            </div>
          </Link>

          <Link href="/">
            <div className="flex justify-center items-center gap-2 mx-2 w-60  px-5 py-2 bg-amber-200 hover:bg-amber-100 rounded-lg shadow-lg border border-black">
              <TelegramLogo size={52} /> Telegram
            </div>
          </Link>

          <Link href="/">
            <div className="flex justify-center items-center gap-2 mx-2 w-60 px-5 py-2 bg-amber-200 hover:bg-amber-100 rounded-lg shadow-lg border border-black">
              <DiscordLogo size={52} /> Discord
            </div>
          </Link>
        </div>

        <div className="text-center py-10">
          <p>
            &copy; Copyright 2024 - Create by{" "}
            <span className="font-bold">Artiko</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
