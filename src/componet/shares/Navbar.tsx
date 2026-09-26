import React from 'react';
import Logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className="sticky top-0 z-50 w-full bg-[#0C0D10]  shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <ul className="flex items-center gap-4 rounded-xl ">
            <Link
              href="/"
              className="text-white text-sm font-semibold hover:text-[#C2F800] rounded-[5px]"
            >
              Workout
            </Link>
            <Link
              href="/"
              className="text-white text-sm font-semibold hover:text-[#C2F800] rounded-[5px]"
              //group flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-200 hover:bg-[#C2F800] hover:text-black
            >
              MyPlan
            </Link>
          </ul>
          <div className=" flex gap-4">
            <button className="text-amber-50 text-[16px]">Plan 0</button>
            <button className="text-amber-50 text-[16px]">Saved 0</button>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;