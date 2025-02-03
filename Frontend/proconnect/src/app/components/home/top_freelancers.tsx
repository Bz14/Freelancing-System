import Image from "next/image";
import img from "../../../../public/assets/Images/person1.jpg";

const topFreelancers = [
  {
    id: 1,
    name: "John Doe",
    skills: ["Web Development", "React", "Node.js"],
    rating: 4.9,
    image: img,
  },
  {
    id: 2,
    name: "Sarah Smith",
    skills: ["UI/UX Design", "Figma", "Adobe XD"],
    rating: 4.8,
    image: img,
  },
  {
    id: 3,
    name: "Michael Lee",
    skills: ["AI/ML", "Python", "TensorFlow"],
    rating: 4.7,
    image: img,
  },
];

const TopFreelancers = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Top Freelancers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={freelancer.image}
                alt={freelancer.name}
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl text-primary font-semibold mt-4">
                {freelancer.name}
              </h3>
              <p className="text-secondary">{freelancer.skills.join(", ")}</p>
              <p className="text-yellow-500 font-bold mt-2">
                ⭐ {freelancer.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;
