import FeaturedGames from "@/components/FeaturedGames";
import Heros from "@/components/Heros";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex pb-6 flex-col bg-dark min-h-screen w-screen overflow-x-hidden pt-20">
      <Navbar />
      <Heros/>
      <FeaturedGames/>
    </div>
  );
}
