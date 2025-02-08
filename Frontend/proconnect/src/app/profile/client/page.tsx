"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import DashboardHeader from "./components/dashboardHeader";

// Different component sections
const DashboardContent = () => <div>📊 Dashboard Overview</div>;
const JobsContent = () => <div>📝 My Jobs</div>;
const PaymentsContent = () => <div>💰 Payments</div>;
const ProfileContent = () => <div>👤 Profile Settings</div>;

const ClientDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className="flex mb-10">
      <Sidebar onSelect={setSelectedMenu} />
      <div className="flex-1 p-5">
        <DashboardHeader />
        {selectedMenu === "dashboard" && <DashboardContent />}
        {selectedMenu === "jobs" && <JobsContent />}
        {selectedMenu === "payments" && <PaymentsContent />}
        {selectedMenu === "profile" && <ProfileContent />}
      </div>
    </div>
  );
};

export default ClientDashboard;
