import Image from "next/image";
import React from "react";

const FeaturedGamesCard = () => {
  return (
    <div>
      <Image
        src="/images.jpg"
        alt="Spell Rush"
        width={1000}
        height={1000}
        className="w-full"
      />
      <h1 className="text-yellow-500 text-2xl">Spell Rush</h1>
      <div className="flex justify-between">
        <div>Puzzle</div>
        <div>4.8 reviews</div>
      </div>
      <button
        className="bg-yellow-400 text-black font-semibold px-6 py-3 text-sm tracking-wide w-full cursor-pointer hover:bg-yellow-300 transition-colors duration-150"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)"
        }}
      >
        Play Now
      </button>
    </div>
  );
};

export default FeaturedGamesCard;
