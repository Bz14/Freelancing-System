"use client";
import { useRouter, useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobById } from "@/app/redux/slices/jobSlice";
import { useEffect } from "react";

const JobDetails = () => {
  const { id } = useParams();
  // const [job, setJob] = useState(null);
  console.log(typeof id);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, job } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    if (typeof id === "string") {
      dispatch(fetchJobById(id));
    }
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-6 lg:w-3/4">
      <h1 className="text-xl lg:text-2xl font-bold mb-4 text-primary">
        {job.title}
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-primary">
          Job Overview
        </h2>
        <p className="text-primary font-bold">{job.description}</p>
        <p className="text-secondary mt-2">{job.details}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <ul className="space-y-2">
            {job.client.company && (
              <li>
                <strong>Company:</strong> {job.client.company}
              </li>
            )}
            <li>
              <strong>Payment Type:</strong> {job.paymentType}
            </li>
            <li>
              <strong>Payment Amount:</strong> ${job.paymentAmount}
            </li>
            <li>
              <strong>Experience Level:</strong> {job.experienceLevel}
            </li>
            <li>
              <strong>Location:</strong> {job.location}
            </li>
            <li>
              <strong>Status:</strong> {job.status}
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

            {job.rating && (
              <li>
                <strong>Rating:</strong> ⭐ {job.rating}
              </li>
            )}

            {job.client.completedJobs > 0 && (
              <li>
                <strong>Completed Jobs:</strong> {job.client.completedJobs}
              </li>
            )}

            {job.client.rating && (
              <li>
                <strong>Client Rating:</strong> {job.client.rating}
              </li>
            )}
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
          {/* {job &&
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
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
