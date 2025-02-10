"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import DashboardHeader from "./components/dashboardHeader";
import Dashboard from "./components/dashboard";
import ClientProfile from "./components/profile";
import MyJobs from "./components/myJobs";

const PaymentsContent = () => <div>💰 Payments</div>;

const ClientDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className="flex mb-10">
      <Sidebar onSelect={setSelectedMenu} />
      <div className="flex-1 p-5">
        <DashboardHeader />
        {selectedMenu === "dashboard" && <Dashboard />}
        {selectedMenu === "jobs" && <MyJobs />}
        {selectedMenu === "payments" && <PaymentsContent />}
        {selectedMenu === "profile" && <ClientProfile />}
      </div>
    </div>
  );
};

export default ClientDashboard;
