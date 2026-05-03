import React from "react";
import FeaturedGamesCard from "./FeaturedGamesCard";

const FeaturedGames = () => {
  return (
    <div className="py-8 px-6 w-full max-w-full">
      <div className="flex w-full items-center gap-3">
        <h1 className="font-medium w-64 text-3xl">Featured Games</h1>{" "}
        <button
          className="bg-accent text-black font-semibold px-6 py-5 text-sm tracking-wide w-full"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px)",
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
