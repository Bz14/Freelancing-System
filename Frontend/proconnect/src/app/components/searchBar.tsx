import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { setSearchQuery, fetchAllJobs } from "../redux/slices/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store/store";

interface SearchBarProps {
  placeholder: string;
}
interface HandleChangeEvent {
  target: {
    value: string;
  };
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { searchQuery } = useSelector((state: RootState) => state.jobs);

  const handleChange = (event: HandleChangeEvent) => {
    setQuery(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  };

  useEffect(() => {
    dispatch(fetchAllJobs(`/jobs?page=1&search=${searchQuery}`));
  }, [searchQuery]);

  return (
    <div className="flex items-center border border-gray-300 p-2 rounded-lg mt-4 lg:w-1/2 mx-auto">
      <FaSearch className="text-gray-500 mx-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
