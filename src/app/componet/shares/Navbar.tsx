"use client";

import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FitContext } from "@/context/FitContext";

const Navbar = () => {

  const fitContext = useContext(FitContext);
  if (!fitContext) {
    throw new Error("Navbar must be used within a FitContext provider");
  }
  
  const { plan, saved } = fitContext;
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Workout",
      href: "/",
    },
    {
      name: "MyPlan",
      href: "/fit/list-fit",
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-[#0C0D10] shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-4 rounded-xl">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[5px] px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#C2F800] text-black"
                    : "text-white hover:bg-[#C2F800] hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>

        {/* Plan & Saved */}
        <div className="flex gap-4">
          <button className="text-[16px] text-amber-50">
            Plan {plan.length}
          </button>

          <button className="text-[16px] text-amber-50">
            Saved {saved.length}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
