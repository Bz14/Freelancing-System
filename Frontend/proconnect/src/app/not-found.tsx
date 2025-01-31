import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition"
      >
        <FaArrowLeft />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
