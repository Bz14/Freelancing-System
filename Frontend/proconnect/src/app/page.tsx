import HeroSection from "./components/home/hero_section";
import HowItWorksSection from "./components/home/how_it_works";
import CategoriesSection from "./components/home/popular_jobs";
import TopFreelancers from "./components/home/top_freelancers";
import Testimonials from "./components/home/testimonial";

export default function Home() {
  return (
    <section className="bg-gray-50">
      <HeroSection />;
      <HowItWorksSection />;
      <CategoriesSection />;
      <TopFreelancers />;
      <Testimonials />;
    </section>
  );
}
