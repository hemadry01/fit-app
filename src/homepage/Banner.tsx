import React from 'react';
import BannerImage from "@/assets/banner.png";
import Image from 'next/image';

const Banner = () => {
    return (
      <div className="bg-[#15171D] container items-center mx-auto rounded-xl">
        <div className="m-2 p-4 flex container items-center mx-auto">
          <div className="w-3/4 ml-5 ">
            <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
            <h2 className="text-3xl text-white mt-2 font-semibold">
              TRAIN WITH INTENT.
              <br /> LOG EVERY SET.
            </h2>
            <p className="text-[#9CA3AF] mt-2 ">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br />
              into today's plan, and watch the week's work add up.
            </p>
            <button className="bg-[#C2F800] rounded-[7px] p-1 text-[12px] font-semibold mt-2">
              BROWSE WORKOUTS
            </button>
          </div>
          <div className="w-1/4 items-center">
            <Image src={BannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    );
};

export default Banner;