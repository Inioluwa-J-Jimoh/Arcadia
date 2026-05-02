import Image from "next/image";
import React from "react";

const Heros = () => {
  return (
    <div className="flex flex-col relative pt-16 items-center bg-linear-to-b from-accent/0 to-accent/30 rounded-b-3xl max-w-[95vw] mx-auto w-full h-[85vh]">
      <h1 className="text-[100px] leading-24 text-center font-bold">
        Classic Games. <br />
        <span className="text-center font-bold text-accent">Zero Noise.</span>
      </h1>
      <p className="text-center text-white/65 mt-3">
        A stripped-back arcade for the games that actually matter. <br />
        No bloat, no battle passes — just pick a game and play.{" "}
      </p>
      <button
        className="bg-accent z-20 w-fit mx-auto mt-7 text-black font-semibold px-6 py-3 text-sm tracking-wide hover:bg-yellow-500 transition-colors duration-150 cursor-pointer"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)",
        }}
      >
        Browse Games
      </button>
      <div className="absolute bottom-0 z-10">
        <Image src="/gamepad.svg" alt="" width={1000} height={1000} className="h-70 w-auto" />
        {/* <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div> */}
      </div>
    </div>
  );
};

export default Heros;
