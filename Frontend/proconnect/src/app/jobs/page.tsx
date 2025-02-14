"use client";

import { useEffect } from "react";
import JobCard from "./components/jobCards";
import SearchBar from "../components/searchBar";
import FilterSection from "./components/filters";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store/store";
import { fetchAllJobs } from "../redux/slices/jobSlice";
import { resetInitialState } from "../redux/slices/jobSlice";

const BrowseJobs = () => {
  const { accessToken } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success, data } = useSelector(
    (state: RootState) => state.jobs
  );

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  useEffect(() => {
    if (success) {
      resetInitialState();
    }
  }, [success]);

  useEffect(() => {
    dispatch(fetchAllJobs("/jobs?page=1"));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchJobs = (url: string) => {
    dispatch(fetchAllJobs(url));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-primary">All Jobs</h1>
      <SearchBar placeholder={"Search jobs..."} />
      <FilterSection />
      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading jobs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-6">
          {data &&
            data.jobs &&
            data.jobs
              // .filter((job) =>
              //   job.title.toLowerCase().includes(searchQuery.toLowerCase())
              // )
              .map((job) => (
                <JobCard
                  key={job.id}
                  job={{
                    title: job.title,
                    company: job.company,
                    paymentAmount: job.paymentAmount,
                    paymentType: job.paymentType,
                    description: job.description,
                    skills: job.skills,
                    experienceLevel: job.experienceLevel,
                    postedTime: job.postedTime,
                    deadline: job.deadline,
                  }}
                />
              ))}
        </div>
      )}
      {error && (
        <p className="text-center text-red-500 mt-6">
          An error occurred. Please try again later.
        </p>
      )}
      <div className="flex justify-center gap-4 mt-6">
        {data.pagination.prevPage && (
          <button
            onClick={() => fetchJobs(data.pagination.prevPage)}
            className="bg-primary text-white py-2 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {data.pagination.nextPage && (
          <button
            onClick={() => fetchJobs(data.pagination.nextPage)}
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
