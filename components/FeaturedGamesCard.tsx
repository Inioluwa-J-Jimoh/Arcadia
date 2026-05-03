import Image from "next/image";
import React from "react";

const FeaturedGamesCard = () => {
  return (
    <div>
        <Image
        src='/images.jpg'
        alt = "Spell Rush"
        width={400}
        height={300}
        className="w-full h-auto"
        />
        <div>Puzzle 4.8 reviews</div>
       <button>Play Now</button>
    </div>
  );
};

export default FeaturedGamesCard;
