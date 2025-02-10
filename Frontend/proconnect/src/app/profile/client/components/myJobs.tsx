"use client";
import { useState, useEffect } from "react";

const dummyJobs = {
  data: [
    {
      id: "1",
      title: "Software Engineer",
      description: "Develop and maintain web applications.",
      location: "New York, USA",
      postedOn: "2 hours ago",
    },
    {
      id: "2",
      title: "Front-End Developer",
      description: "Build responsive user interfaces using React.",
      location: "San Francisco, USA",
      postedOn: "2 hours ago",
    },
    {
      id: "3",
      title: "Backend Developer",
      description: "Create server-side applications and APIs.",
      location: "Austin, USA",
      postedOn: "2 hours ago",
    },
    {
      id: "4",
      title: "UX/UI Designer",
      description: "Design user interfaces and optimize user experiences.",
      location: "Los Angeles, USA",
      postedOn: "2 hours ago",
    },
  ],
  pagination: {
    next: "/api/jobs?page=2",
    prev: "/api/jobs?page=1",
    first: "/api/jobs?page=1",
    last: "/api/jobs?page=5",
  },
};

const MyJobs = () => {
  const [jobs, setJobs] = useState(dummyJobs.data);
  const [pagination, setPagination] = useState(dummyJobs.pagination);

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
    <div className="p-6 bg-white shadow-md rounded-lg mt-2">
      <h1 className="text-2xl font-semibold text-primary mb-4">My Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md h-fit"
          >
            <h3 className="text-xl font-semibold text-primary">{job.title}</h3>

            <p className="text-secondary">{job.location}</p>
            <p className="text-secondary">{job.location}</p>
            <p className="mt-2 text-secondary">{job.description}</p>
            <p className="mt-2 text-primary">{job.postedOn}</p>
            <div className="flex justify-end mt-4">
              <button className="bg-primary text-white rounded-lg p-2">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        {pagination.prev && (
          <button
            // onClick={() => fetchJobs(pagination.prev)}
            disabled={!pagination.prev}
            className="bg-primary text-white px-4 py-2 rounded shadow disabled:opacity-50"
          >
            Previous
          </button>
        )}

        {pagination.next && (
          <button
            // onClick={() => fetchJobs(pagination.prev)}
            disabled={!pagination.next}
            className="bg-primary text-white px-4 py-2 rounded shadow disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
