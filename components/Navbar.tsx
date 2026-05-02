import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full max-w-full px-10 py-3 fixed top-0 left-0 right-0 bg-[#111] items-center justify-between flex border-b border-white/3 z-50">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-20 h-auto"
        />
      </Link>
      <div className="flex gap-5 items-center cursor-pointer ">
        <ul className="gap-3">
          <li className="hover:text-accent transition-all duration-300">
            Explore
          </li>
          <li className="hover:text-accent">Top Charts</li>
        </ul>
        <button
          className="bg-accent text-black font-semibold px-6 py-3 text-sm tracking-wide hover:bg-yellow-500 transition-colors duration-150 cursor-pointer"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)",
          }}
        >
          Start Playing
        </button>
      </div>
    </div>
  );
};

export default Navbar;
