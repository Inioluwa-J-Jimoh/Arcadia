import Categories from "@/components/Categories";
import FeaturedGames from "@/components/FeaturedGames";
import Heros from "@/components/Heros";
import Navbar from "@/components/Navbar";
import Puzzles from "@/components/Puzzles";

export default function Home() {
  return (
    <div className="flex w-full pb-6 flex-col bg-[#111] min-h-screen">
      <Navbar />
      <Heros />
      <FeaturedGames />
      <Categories/>
      <Puzzles/>
    </div>
  );
}
