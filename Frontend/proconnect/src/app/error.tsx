"use client";

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <FaExclamationTriangle className="text-red-500 text-6xl" />
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Oops! Something Went Wrong
      </h2>
      <p className="text-gray-600 mt-2">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
