import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex items-center border border-gray-300 p-2 rounded-lg mt-4 lg:w-1/2 mx-auto">
      <FaSearch className="text-gray-500 mx-2" />
      <input
        type="text"
        placeholder="Search jobs..."
        className="w-full outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
