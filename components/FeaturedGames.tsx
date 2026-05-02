import React from "react";
import FeaturedGamesCard from "./FeaturedGamesCard";

const FeaturedGames = () => {
  return (
    <div className="py-12 px-6 w-full">
      <div className="flex w-full items-center gap-3">
        <h1 className="font-medium w-48 text-xl">Featured Games</h1>{" "}
        <button
          className="bg-yellow-400 text-black font-semibold px-6 py-3 text-sm tracking-wide w-full"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)"
          }}
        ></button>
      </div>
      <div className="grid grid-cols-4 gap-5 w-full">
        <FeaturedGamesCard />
        <FeaturedGamesCard />
        <FeaturedGamesCard />
        <FeaturedGamesCard />
      </div>
    </div>
  );
};

export default FeaturedGames;
