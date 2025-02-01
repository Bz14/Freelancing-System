import Link from "next/link";
import {
  Briefcase,
  Code,
  Paintbrush,
  PenTool,
  BarChart3,
  BrainCircuit,
} from "lucide-react";

const categories = [
  {
    name: "Web Development",
    icon: <Code size={32} />,
    link: "/jobs/web-development",
  },
  {
    name: "Graphic Design",
    icon: <Paintbrush size={32} />,
    link: "/jobs/graphic-design",
  },
  {
    name: "Writing & Translation",
    icon: <PenTool size={32} />,
    link: "/jobs/writing",
  },
  {
    name: "Marketing & Sales",
    icon: <BarChart3 size={32} />,
    link: "/jobs/marketing",
  },
  {
    name: "AI & Data Science",
    icon: <BrainCircuit size={32} />,
    link: "/jobs/ai-data-science",
  },
  {
    name: "Business & Consulting",
    icon: <Briefcase size={32} />,
    link: "/jobs/business-consulting",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Explore Freelance Categories
        </h2>
        <p className="text-secondary mt-2">
          Find work that matches your skills and interests.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300 flex flex-col items-center"
            >
              <div className="text-primary group-hover:text-secondary">
                {category.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
