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
  const [overLayOpen, setOverLayOpen] = useState(false);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    onSelect(menu);
  };

  return (
    <div
      className={`${
        overLayOpen ? "w-64" : "w-28"
      }  min-h-screen bg-primary text-white p-5`}
    >
      <Image
        src={logo}
        alt="ProConnect"
        width={100}
        height={100}
        className="mx-auto cursor-pointer"
        onClick={() => setOverLayOpen(!overLayOpen)}
      />
      <ul className="space-y-4">
        {[
          {
            label: "Dashboard",
            icon: <FaHome size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "dashboard",
          },
          {
            label: "Profile",
            icon: <FaUser size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "profile",
          },
          {
            label: "My Jobs",
            icon: <FaClipboardList size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "jobs",
          },
          {
            label: "Payments",
            icon: <FaMoneyBill size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "payments",
          },
          {
            label: "Proposals",
            icon: <FaFileAlt size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "proposals",
          },
          {
            label: "Upload Job",
            icon: <FaUpload size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "upload",
          },
          {
            label: "Reviews",
            icon: <FaStar size={`${!overLayOpen ? "25" : "20"}`} />,
            key: "reviews",
          },
        ].map((item) => (
          <li
            key={item.key}
            className={`flex items-center space-x-3 cursor-pointer hover:text-gray-300 p-2 rounded ${
              activeMenu === item.key ? "bg-secondary text-white" : ""
            }`}
            onClick={() => handleMenuClick(item.key)}
          >
            {item.icon}
            {overLayOpen && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
