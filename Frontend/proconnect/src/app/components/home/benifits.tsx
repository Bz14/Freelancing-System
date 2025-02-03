import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    id: 1,
    title: "Secure Payments",
    description:
      "We use an escrow system to ensure freelancers get paid on time and clients receive quality work.",
    icon: ShieldCheckIcon,
  },
  {
    id: 2,
    title: "AI Job Matching",
    description:
      "Our AI-powered matching system connects freelancers with the most relevant job opportunities.",
    icon: SparklesIcon,
  },
  {
    id: 3,
    title: "Verified Clients & Freelancers",
    description:
      "We verify users to create a safe and trustworthy work environment for everyone.",
    icon: UserGroupIcon,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any issues.",
    icon: ClockIcon,
  },
];
const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-10">
          Why Choose Us? 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full text-white bg-primary`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-primary font-semibold mt-4">
                {feature.title}
              </h3>
              <p className="text-secondary mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
