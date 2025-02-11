"use client";
import { useState, useEffect } from "react";
import { FaUser, FaEye } from "react-icons/fa";

const dummyProjects = {
  data: [
    {
      id: "proj1",
      title: "Website Development",
      status: "Open",
      proposals: [
        {
          id: "prop1",
          freelancer: "Alice Johnson",
          amount: 1200,
          date: "2024-02-05",
          status: "Pending",
        },
        {
          id: "prop2",
          freelancer: "Bob Smith",
          amount: 1500,
          date: "2024-02-06",
          status: "Accepted",
        },
        {
          id: "prop3",
          freelancer: "Charlie Brown",
          amount: 1100,
          date: "2024-02-07",
          status: "Rejected",
        },
      ],
    },
    {
      id: "proj2",
      title: "Mobile App UI/UX Design",
      status: "In Progress",
      proposals: [
        {
          id: "prop4",
          freelancer: "Diana Prince",
          amount: 900,
          date: "2024-02-08",
          status: "Pending",
        },
        {
          id: "prop5",
          freelancer: "Ethan Hunt",
          amount: 1000,
          date: "2024-02-09",
          status: "Accepted",
        },
      ],
    },
  ],
  pagination: {
    next: "/api/jobs?page=2",
    prev: "/api/jobs?page=1",
    first: "/api/jobs?page=1",
    last: "/api/jobs?page=5",
  },
};

const Proposals = () => {
  const [selectedProject, setSelectedProject] = useState(
    dummyProjects.data[0].id
  );
  const [proposals, setProposals] = useState<
    {
      id: string;
      freelancer: string;
      amount: number;
      date: string;
      status: string;
    }[]
  >([]);
  const [pagination, setPagination] = useState(dummyProjects.pagination);

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

  useEffect(() => {
    const project = dummyProjects.data.find((p) => p.id === selectedProject);
    setProposals(project ? project.proposals : []);
  }, [selectedProject]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full mt-4">
      <h1 className="text-2xl font-semibold text-primary mb-4">Proposals</h1>

      <label className="text-secondary font-semibold">Select Project:</label>
      <select
        value={selectedProject}
        onChange={(e) => {
          setSelectedProject(e.target.value);
        }}
        className="w-full p-2 border rounded mt-2 outline-none text-secondary"
      >
        {dummyProjects.data.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title} ({project.status})
          </option>
        ))}
      </select>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary mb-3">
          Freelancer Proposals
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {proposals.length > 0 ? (
            proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="flex justify-between items-center p-2 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-2">
                  <FaUser className="text-primary" />
                  <span className="font-semibold">{proposal.freelancer}</span>
                </div>
                <span className="font-bold text-primary">
                  ${proposal.amount}
                </span>
                <span className="text-secondary">{proposal.date}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    proposal.status === "Accepted"
                      ? "bg-primary text-white"
                      : proposal.status === "Rejected"
                      ? "bg-secondary text-white"
                      : "bg-gray-200 text-primary"
                  }`}
                >
                  {proposal.status}
                </span>
                <button className="bg-primary text-white px-3 py-1 rounded shadow hover:bg-secondary">
                  <FaEye />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No proposals available.</p>
          )}
        </div>

        <div className="mt-4 flex justify-between">
          <button
            // onClick={() => fetchJobs(pagination.prev)}
            disabled={!pagination.prev}
            className="bg-primary text-white px-4 py-2 rounded shadow disabled:opacity-50"
          >
            Previous
          </button>
          <button
            // onClick={() => fetchJobs(pagination.prev)}

            disabled={!pagination.next}
            className="bg-primary text-white px-4 py-2 rounded shadow disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposals;
