const FreelancerProposals = () => {
  const proposals = [
    { name: "Alice Johnson", rate: "$30/hr", rating: 4.8 },
    { name: "Bob Williams", rate: "$25/hr", rating: 4.5 },
  ];

  return (
    <div className="mt-5 p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold">New Freelancer Proposals</h2>
      <ul className="mt-3 space-y-3">
        {proposals.map((proposal, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>
              {proposal.name} - {proposal.rate}
            </span>
            <span className="text-gray-500">⭐ {proposal.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerProposals;
