"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OverviewStats = () => {
  const stats = [
    { title: "Total Jobs Posted", value: 15 },
    { title: "Active Jobs", value: 5 },
    { title: "Completed Jobs", value: 10 },
    { title: "Total Spent", value: 5000 }, // Remove $ for numerical representation
  ];

  // Chart Data
  const chartData = {
    labels: stats.map((stat) => stat.title),
    datasets: [
      {
        label: "Overview Stats",
        data: stats.map((stat) => stat.value),
        backgroundColor: ["#3498db", "#f39c12", "#2ecc71", "#e74c3c"], // Different colors for bars
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="mt-5 mb-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-primary text-white p-4 rounded shadow text-center"
          >
            <h3 className="lg:text-lg font-semibold">{stat.title}</h3>
            <p className="lg:text-2xl font-bold">
              {stat.title === "Total Spent" ? `$${stat.value}` : stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-5 rounded-lg shadow-lg lg:h-96">
        <h2 className="text-xl font-semibold mb-3">Job Overview Chart</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default OverviewStats;
