"use client";

import { useState, useEffect } from "react";
import JobCard from "./components/jobCards";
import SearchBar from "../components/searchBar";
import FilterSection from "./components/filters";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useRouter } from "next/navigation";

const dummyResponse = {
  data: [
    {
      id: 1,
      title: "React Native Developer Needed",
      company: "TechCorp",
      budget: "$2000",
      type: "Fixed" as "Fixed" | "Hourly",
      description:
        "We are looking for an experienced React Native developer to build a mobile application for our client.",
      skills: ["React Native", "JavaScript", "Redux"],
      experience: "Intermediate",
      postedTime: "2 hours ago",
      deadline: "1 week",
    },
    {
      id: 2,
      title: "React Native Developer Needed",
      company: "TechCorp",
      budget: "$2000",
      type: "Fixed" as "Fixed" | "Hourly",
      description:
        "We are looking for an experienced React Native developer to build a mobile application for our client.",
      skills: ["React Native", "JavaScript", "Redux"],
      experience: "Intermediate",
      postedTime: "2 hours ago",
      deadline: "1 week",
    },
    {
      id: 3,
      title: "React Native Developer Needed",
      company: "TechCorp",
      budget: "$2000",
      type: "Fixed" as "Fixed" | "Hourly",
      description:
        "We are looking for an experienced React Native developer to build a mobile application for our client.",
      skills: ["React Native", "JavaScript", "Redux"],
      experience: "Intermediate",
      postedTime: "2 hours ago",
      deadline: "1 week",
    },
    {
      id: 4,
      title: "React Native Developer Needed",
      company: "TechCorp",
      budget: "$2000",
      type: "Fixed" as "Fixed" | "Hourly",
      description:
        "We are looking for an experienced React Native developer to build a mobile application for our client.",
      skills: ["React Native", "JavaScript", "Redux"],
      experience: "Intermediate",
      postedTime: "2 hours ago",
      deadline: "1 week",
    },
    {
      id: 5,
      title: "React Native Developer Needed",
      company: "TechCorp",
      budget: "$2000",
      type: "Fixed" as "Fixed" | "Hourly",
      description:
        "We are looking for an experienced React Native developer to build a mobile application for our client.",
      skills: ["React Native", "JavaScript", "Redux"],
      experience: "Intermediate",
      postedTime: "2 hours ago",
      deadline: "1 week",
    },
    {
      id: 6,
      title: "React Native Developer Needed",
      company: "TechCorp",
      budget: "$2000",
      type: "Fixed" as "Fixed" | "Hourly",
      description:
        "We are looking for an experienced React Native developer to build a mobile application for our client.",
      skills: ["React Native", "JavaScript", "Redux"],
      experience: "Intermediate",
      postedTime: "2 hours ago",
      deadline: "1 week",
    },
  ],
  pagination: {
    next: "/api/jobs?page=2",
    prev: "/api/jobs?page=1",
    first: "/api/jobs?page=1",
    last: "/api/jobs?page=5",
  },
};

const BrowseJobs = () => {
  const { accessToken } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const [jobs, setJobs] = useState(dummyResponse.data);
  const [pagination, setPagination] = useState(dummyResponse.pagination);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  // const fetchJobs = async (url: string) => {
  //   setLoading(true);
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   setJobs(data.data);
  //   setPagination(data.pagination);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchJobs("/api/jobs?page=1"); // Fetch the first page
  // }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-primary">All Jobs</h1>
      <SearchBar placeholder={"Search jobs..."} />
      <FilterSection />
      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading jobs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-6">
          {jobs
            // .filter((job) =>
            //   job.title.toLowerCase().includes(searchQuery.toLowerCase())
            // )
            .map((job) => (
              <JobCard key={job.id} {...job} />
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

export default BrowseJobs;
