interface WorkProps {
  workHistory: {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
  }[];
}

const Work: React.FC<WorkProps> = ({ workHistory }) => {
  return (
    <div className="bg-white text-primary shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Work History</h2>
      {workHistory.map((work, index) => (
        <div key={index} className="mb-4 bg-primary text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold">{work.jobTitle}</h3>
          <p className="text-sm">{work.company}</p>
          <p className="text-sm">{work.duration}</p>
          <p className="mt-2">{work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Work;
