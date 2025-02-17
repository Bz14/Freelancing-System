import React from "react";
import { FaClock, FaDollarSign, FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface JobProps {
  id: string;
  title: string;
  company?: string;
  paymentAmount: number;
  paymentType: string;
  description: string;
  skills: string[];
  experienceLevel: string;
  postedTime: string;
  deadline?: string;
}

interface JobCardProps {
  job: JobProps;
}

const JobCard: React.FC<JobCardProps> = ({
  job: {
    id,
    title,
    company,
    paymentAmount,
    paymentType,
    description,
    skills,
    experienceLevel,
    postedTime,
    deadline,
  },
}) => {
  const router = useRouter();
  return (
    <div className="border p-4 shadow-lg rounded-lg bg-white hover:scale-105 transition-transform cursor-pointer">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      {company && <p className="text-sm text-secondary">{company}</p>}

      <div className="flex items-center text-sm text-secondary mt-2">
        <FaDollarSign className=" text-primary" />
        <span>
          {paymentAmount} ({paymentType})
        </span>
      </div>

      <p className="text-secondary mt-2 text-sm line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-primary text-white text-xs px-2 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between text-xs text-secondary mt-3">
        <p className="flex items-center">
          <FaBriefcase className="mr-1" /> {experienceLevel} Level
        </p>
        <p className="flex items-center">
          <FaClock className="mr-1" /> {postedTime}
        </p>
      </div>

      {deadline && (
        <p className="text-xs text-red-500 mt-1">Deadline: {deadline}</p>
      )}

      <button
        className="mt-3 w-full bg-primary text-white py-2 rounded-md hover:bg-secondary"
        onClick={() => router.push(`/jobs/${id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;
