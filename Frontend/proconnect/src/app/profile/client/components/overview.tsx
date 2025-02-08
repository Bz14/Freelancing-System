const OverviewStats = () => {
  const stats = [
    { title: "Total Jobs Posted", value: 15 },
    { title: "Active Jobs", value: 5 },
    { title: "Completed Jobs", value: 10 },
    { title: "Total Spent", value: "$5000" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {stats.map((stat, index) => (
        <div key={index} className="bg-blue-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">{stat.title}</h3>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewStats;
