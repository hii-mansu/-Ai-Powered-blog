import React, { useState } from "react";
import Tab from "./Tab";
import SearchResults from "./SearchResults";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col items-center  px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5 mt-30 rounded-full border border-white">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-purple-700"></span>
          </div>
          <p className="text-sm text-black/60">
            Join 12,450+ brands growing with us
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold max-w-lg md:max-w-2xl text-center mt-4 leading-tight md:leading-tight">
          Build stunning{" "}
          <span className="relative bg-gradient-to-r from-purple-700 to-[#764de1] bg-clip-text text-transparent">
            websites
            <div className="z-10 absolute bottom-0 left-0 w-full scale-120">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient_arc.svg"
                alt="gradient"
              />
            </div>
          </span>{" "}
          <span className="relative bg-gradient-to-r from-[#764de1] to-indigo-600 bg-clip-text text-transparent">
            with
          </span>{" "}
          PrebuiltUI.
        </h1>
        <p className="text-sm text-gray-600 text-center max-w-[630px] mt-4">
          We design high-impact websites that convert and scale. From sleek
          interfaces to full stack experiences, we bring your brand to life
          online.
        </p>

        <form className="w-full mt-7 flex justify-center group">
          <label className="border border-gray-400 rounded-md p-1 flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="type here"
              className="pl-2 flex-1 outline-none"
            />
            <button className="bg-purple-700 text-white p-3 px-6 rounded-md cursor-pointer">
              {" "}
              Search{" "}
            </button>
          </label>
        </form>

        <Tab />

        <div className="w-full max-w-[800px] h-[3px] mt-7 bg-linear-to-r from-white/10 via-violet-600 to-white/10"></div>
        

        <SearchResults />


      </section>
    </>
  );
};

export default Hero;
