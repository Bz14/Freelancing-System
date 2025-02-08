"use client";
import { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaMoneyBill,
  FaUser,
  FaFileAlt,
  FaUpload,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@public/assets/logo.png";

const Sidebar = ({ onSelect }: { onSelect: (menu: string) => void }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    onSelect(menu);
  };

  return (
    <div className="w-64 h-screen bg-primary text-white p-5">
      <Image
        src={logo}
        alt="ProConnect"
        width={100}
        height={100}
        className="mx-auto"
      />

      <ul className="space-y-4">
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "dashboard" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("dashboard")}
        >
          <FaHome /> <span>Dashboard</span>
        </li>
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "profile" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("profile")}
        >
          <FaUser /> <span>Profile</span>
        </li>
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "jobs" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("jobs")}
        >
          <FaClipboardList /> <span>My Jobs</span>
        </li>
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "payments" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("payments")}
        >
          <FaMoneyBill /> <span>Payments</span>
        </li>
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "proposals" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("proposals")}
        >
          <FaFileAlt /> <span>Proposals</span>
        </li>
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "upload Jobs" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("upload")}
        >
          <FaUpload /> <span>Upload Job</span>
        </li>
        <li
          className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 ${
            activeMenu === "upload Jobs" ? "bg-secondary p-2 text-white" : ""
          }`}
          onClick={() => handleMenuClick("reviews")}
        >
          <FaStar /> <span>Reviews</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
