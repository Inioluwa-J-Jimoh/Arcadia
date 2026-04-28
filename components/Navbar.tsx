import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {


 

  return (
    <div className="w-full p-3 items-center justify-between flex border-b border-white/3">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-20 h-auto"
        />
      </Link>
     <div className="flex gap-5 items-center cursor-pointer " >
       <ul className="gap-3">
        <li className="hover:text-yellow-300 transition-all duration-300">Explore</li>
        <li className="hover:text-yellow-300">Top Charts</li>
      </ul>
     <button
  className="bg-yellow-400 text-black font-semibold px-6 py-3 text-sm tracking-wide hover:bg-yellow-300 transition-colors duration-150 cursor-pointer"
  style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)' }}
>
  Start Playing
</button>
     </div>
    </div>
  );
};

export default Navbar;
