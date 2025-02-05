import Image from "next/image";
import { useRouter } from "next/navigation";
import FreelancerProps from "@/app/interfaces/user";

const FreeLancerCard: React.FC<FreelancerProps> = (freelancer) => {
  const router = useRouter();
  return (
    <div
      key={freelancer.id}
      className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center border hover:scale-105 transition-transform cursor-pointer"
    >
      <Image
        src={freelancer.profilePicture}
        alt={freelancer.name}
        width={100}
        height={100}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{freelancer.name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {freelancer.skills.join(", ")}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        Location: {freelancer.location}
      </p>
      <p className="text-sm text-yellow-500">Rating: ⭐ {freelancer.rating}</p>
      <button
        className="mt-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary"
        onClick={() => router.push(`/freelancers/${freelancer.id}`)}
      >
        View Profile
      </button>
    </div>
  );
};

export default FreeLancerCard;
