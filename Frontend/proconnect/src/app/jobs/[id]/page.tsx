"use client";
import React from "react";
import { useRouter } from "next/navigation";

const JobDetails = () => {
  const router = useRouter();
  const job = {
    id: "1",
    title: "React Native Developer Needed",
    description:
      "We are looking for a skilled React Native developer to build a cross-platform mobile app.",
    details: `We are looking for a skilled React Native developer to build a cross-platform mobile app. 
      We are looking for a skilled React Native developer to build a cross-platform mobile app.
      We are looking for a skilled React Native developer to build a cross-platform mobile app.
      We are looking for a skilled React Native developer to build a cross-platform mobile app.`,
    company: "Tech Solutions Inc.",
    paymentType: "Fixed Price",
    paymentAmount: "$2000",
    skills: ["React Native", "JavaScript", "Redux", "Firebase"],
    postedTime: "2 days ago",
    deadline: "Feb 20, 2025",
    experienceLevel: "Intermediate",
    proposalsSent: 25,
    rating: 4.7,
    location: "Remote",
    projectLength: "3 months",
    clientHistory: "50+ completed projects, 4.9-star rating",
    previousWorks: [
      {
        id: "1",
        title: "E-commerce App for Fashion",
        description:
          "Developed a React Native mobile app for an online fashion store with real-time payment integration.",
      },
      {
        id: "2",
        title: "Food Delivery Application",
        description:
          "Built a food delivery app using React Native and Firebase, including live tracking and in-app chat.",
      },
      {
        id: "3",
        title: "Fitness Tracking Mobile App",
        description:
          "Created a fitness app with step tracking, diet suggestions, and personalized workout plans.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl lg:text-2xl font-bold mb-4 text-primary">
        {job.title}
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-primary">
          Job Overview
        </h2>
        <p className="text-secondary">{job.description}</p>
        <p className="text-secondary mt-2">{job.details}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <ul className="space-y-2">
            <li>
              <strong>Company:</strong> {job.company}
            </li>
            <li>
              <strong>Payment Type:</strong> {job.paymentType}
            </li>
            <li>
              <strong>Payment Amount:</strong> {job.paymentAmount}
            </li>
            <li>
              <strong>Experience Level:</strong> {job.experienceLevel}
            </li>
            <li>
              <strong>Location:</strong> {job.location}
            </li>
            <li>
              <strong>Project Length:</strong> {job.projectLength}
            </li>
          </ul>
        </div>
        <div className="bg-primary text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Info</h2>
          <ul className="space-y-2">
            <li>
              <strong>Posted:</strong> {job.postedTime}
            </li>
            <li>
              <strong>Deadline:</strong> {job.deadline}
            </li>
            <li>
              <strong>Proposals Sent:</strong> {job.proposalsSent}
            </li>
            <li>
              <strong>Rating:</strong> ⭐ {job.rating}
            </li>
            <li>
              <strong>Client History:</strong> {job.clientHistory}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Required Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {job &&
            job.skills &&
            job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-primary text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>

      <div className="flex space-x-4 mt-6 justify-center items-center">
        <button
          className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
          onClick={() => router.push("/proposal")}
        >
          Submit Proposal
        </button>
        <button
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-500"
          onClick={() => console.log("Job saved!")}
        >
          Save Job
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Previous Works
        </h2>
        <div className="space-y-4">
          {job &&
            job.previousWorks.map((work) => (
              <div
                key={work.id}
                className="border border-gray-300 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {work.title}
                </h3>
                <p className="text-gray-600">{work.description}</p>
                <button className="mt-2 text-primary font-semibold hover:underline">
                  View More
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
