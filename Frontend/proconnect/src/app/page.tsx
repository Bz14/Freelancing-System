import HeroSection from "./components/home/hero_section";
import HowItWorksSection from "./components/home/how_it_works";
import CategoriesSection from "./components/home/popular_jobs";
import TopFreelancers from "./components/home/top_freelancers";
import Testimonials from "./components/home/testimonial";
import WhyChooseUs from "./components/home/benifits";
import CTASection from "./components/home/call_to_action";
import BlogSection from "./components/home/blogs";

export default function Home() {
  return (
    <section className="bg-gray-50">
      <HeroSection />;
      <HowItWorksSection />;
      <CategoriesSection />;
      <TopFreelancers />;
      <Testimonials />;
      <WhyChooseUs />;
      <CTASection />;
      <BlogSection />;
    </section>
  );
}
