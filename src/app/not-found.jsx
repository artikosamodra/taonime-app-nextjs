"use client";
import { FileSearch } from "@phosphor-icons/react";

const Page = () => {
  return (
    <section className="py-56 flex flex-col justify-center items-center font-bold">
      <FileSearch size={60} />
      <div className="flex flex-row gap-3 justify-center items-center pt-4">
        <div className="text-4xl">
          404 <span className="font-light">|</span>
        </div>
        <div className="">
          <div className="text-xl">PAGE</div>
          <div className="text-sm ">NOT FOUND</div>
        </div>
      </div>
    </section>
  );
};

export default Page;
