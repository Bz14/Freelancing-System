import HeroSection from "./components/hero_section";
import HowItWorksSection from "./components/how_it_works";

export default function Home() {
  return (
    <section className="bg-gray-50 ">
      <HeroSection />;
      <HowItWorksSection />;
    </section>
  );
}
