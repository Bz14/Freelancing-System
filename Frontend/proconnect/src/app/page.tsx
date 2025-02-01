import HeroSection from "./components/hero_section";
import HowItWorksSection from "./components/how_it_works";
import CategoriesSection from "./components/popular_jobs";

export default function Home() {
  return (
    <section className="bg-gray-50 ">
      <HeroSection />;
      <HowItWorksSection />;
      <CategoriesSection />;
    </section>
  );
}
