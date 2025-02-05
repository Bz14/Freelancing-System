"use client";
import React from "react";
import FreeLancerCard from "./components/freelancerCars";
import { useState } from "react";
import img from "../../../public/assets/Images/person1.jpg";
import SearchBar from "../components/searchBar";
import FilterSection from "./components/filters";

const dummyResponse = {
  data: [
    {
      id: "1",
      name: "John Doe",
      skills: ["React", "Node.js", "JavaScript"],
      location: "Remote",
      rating: 4.5,
      profilePicture: img,
    },
    {
      id: "2",
      name: "Jane Smith",
      skills: ["Python", "Django", "Machine Learning"],
      location: "London",
      rating: 4.8,
      profilePicture: img,
    },
    {
      id: "3",
      name: "Michael Lee",
      skills: ["JavaScript", "React", "Redux"],
      location: "New York",
      rating: 4.7,
      profilePicture: img,
    },
    {
      id: "4",
      name: "Emma Brown",
      skills: ["Swift", "iOS Development", "UI/UX Design"],
      location: "Remote",
      rating: 4.9,
      profilePicture: img,
    },
  ],
  pagination: {
    next: "/api/freelancers?page=2",
    prev: "/api/freelancers?page=1",
    first: "/api/freelancers?page=1",
    last: "/api/freelancers?page=5",
  },
};

const FreelancersPage = () => {
  const [freelancers, setFreelancers] = useState(dummyResponse.data);
  const [pagination, setPagination] = useState(dummyResponse.pagination);
  const [loading, setLoading] = useState(false);
  return (
    <div className="container mx-auto px-4 py-6 lg:w-3/4">
      <h1 className="text-2xl font-bold mb-6 text-center text-primary">
        Freelancers
      </h1>

      <SearchBar placeholder={"Search freelancers..."} />
      <FilterSection />
      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading jobs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {freelancers
            // .filter((job) =>
            //   job.title.toLowerCase().includes(searchQuery.toLowerCase())
            // )
            .map((freelancer) => (
              <FreeLancerCard key={freelancer.id} {...freelancer} />
            ))}
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        {pagination.prev && (
          <button
            // onClick={() => fetchJobs(pagination.prev)}
            className="bg-primary text-white py-2 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {pagination.next && (
          <button
            // onClick={() => fetchJobs(pagination.next)}
            className="bg-primary text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FreelancersPage;
