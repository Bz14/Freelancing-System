const ActiveJobs = () => {
  const jobs = [
    {
      title: "Web Development Project",
      freelancer: "John Doe",
      deadline: "Feb 20, 2025",
      status: "In Progress",
    },
    {
      title: "Logo Design",
      freelancer: "Jane Smith",
      deadline: "Mar 5, 2025",
      status: "Pending Review",
    },
  ];

  return (
    <div className="mt-7 p-4 bg-primary text-white shadow rounded">
      <h2 className="text-lg font-bold">Active Jobs</h2>
      <ul className="mt-3 space-y-3">
        {jobs.map((job, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>
              {job.title} - {job.freelancer}
            </span>
            <span className="text-gray-500">{job.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveJobs;
