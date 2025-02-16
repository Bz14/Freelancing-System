"use client";

import { useState, useEffect } from "react";

import { setFilterQueries, fetchAllJobs } from "@/app/redux/slices/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store/store";

const FilterSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filterQueries } = useSelector((state: RootState) => state.jobs);
  const [filters, setFilters] = useState({
    paymentType: "",
    experienceLevel: "",
    minBudget: "",
    maxBudget: "",
    rating: "",
  });
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(setFilterQueries(filters));
  }, [filters]);

  const handleFilter = () => {
    const queryParams = new URLSearchParams(filterQueries).toString();
    dispatch(fetchAllJobs(`/jobs?page=1&${queryParams}`));
  };

  return (
    <div className="mt-6 flex flex-col justify-center p-4 rounded-lg items-center">
      <h2 className="text-md font-semibold text-primary">Filter Jobs</h2>
      <div className="grid grid-rows-2 lg:flex flex-col lg:flex-row lg-items-center lg-justify-center gap-4 mt-2">
        <div>
          <label className="text-sm text-secondary">Job Type</label>
          <select
            name="paymentType"
            value={filters.paymentType}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none text-sm"
          >
            <option value="" className="text-sm">
              Any
            </option>
            <option value="Fixed" className="text-sm">
              Fixed Price
            </option>
            <option value="Hourly" className="text-sm">
              Hourly Rate
            </option>
          </select>
        </div>
        <div>
          <label className="text-sm text-secondary">Experience Level</label>
          <select
            name="experienceLevel"
            value={filters.experienceLevel}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none text-sm"
          >
            <option value="" className="text-sm">
              Any
            </option>
            <option value="Entry" className="text-sm">
              Entry
            </option>
            <option value="Intermediate" className="text-sm">
              Intermediate
            </option>
            <option value="Expert" className="text-sm">
              Expert
            </option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div>
            <label className="text-sm text-secondary">Min Budget</label>
            <input
              type="number"
              name="minBudget"
              value={filters.minBudget}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-secondary">Max Budget</label>
            <input
              type="number"
              name="maxBudget"
              value={filters.maxBudget}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-secondary">Rating</label>
          <input
            type="number"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
            min="0"
            max="5"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-primary p-2 text-white rounded-lg text-sm hover:bg-secondary"
          onClick={handleFilter}
        >
          Apply filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
