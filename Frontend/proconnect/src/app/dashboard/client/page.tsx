"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import DashboardHeader from "./components/dashboardHeader";
import Dashboard from "./components/clientDashboard";
import ClientProfile from "./components/profile";
import MyJobs from "./components/jobs";
import Payments from "./components/payments";
import Proposals from "./components/proposals";
import UploadJob from "./components/uploadJob";
import Reviews from "./components/reviews";

const ClientDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className="flex mb-10">
      <Sidebar onSelect={setSelectedMenu} />
      <div className="flex-1 p-5">
        <DashboardHeader />
        {selectedMenu === "dashboard" && <Dashboard />}
        {selectedMenu === "jobs" && <MyJobs />}
        {selectedMenu === "payments" && <Payments />}
        {selectedMenu === "profile" && <ClientProfile />}
        {selectedMenu == "proposals" && <Proposals />}
        {selectedMenu == "upload" && <UploadJob />}
        {selectedMenu == "reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default ClientDashboard;
