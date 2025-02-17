import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center mb-4">
        <FaSpinner className="animate-spin text-primary text-6xl" />
      </div>
      <h2 className="text-xl text-primary">Loading, please wait...</h2>
    </div>
  );
};

export default LoadingPage;
