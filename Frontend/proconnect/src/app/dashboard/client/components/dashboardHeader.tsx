import { FaBell } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 text-primary">
      <h1 className="text-xl font-bold">Welcome, Eyerusalem! 👋</h1>
      <FaBell className="text-xl cursor-pointer hover:text-secondary" />
    </div>
  );
};

export default DashboardHeader;
