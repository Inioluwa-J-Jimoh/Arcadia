import FeaturedGames from "@/components/FeaturedGames";
import Heros from "@/components/Heros";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex pb-6 flex-col bg-[#111] h-screen">
      <Navbar />
      <Heros/>
      <FeaturedGames/>
    </div>
  );
}
