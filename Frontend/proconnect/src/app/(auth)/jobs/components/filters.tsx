"use client";

import { useState } from "react";

const FilterSection = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    experienceLevel: "",
    budgetMin: "",
    budgetMax: "",
    clientRating: "",
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

  return (
    <div className="mt-6 flex flex-col justify-center p-4 rounded-lg items-center">
      <h2 className="text-md font-semibold text-primary">Filter Jobs</h2>
      <div className="grid grid-rows-2 lg:flex flex-col lg:flex-row lg-items-center lg-justify-center gap-4 mt-2">
        <div>
          <label className="text-sm text-secondary">Job Type</label>
          <select
            name="jobType"
            value={filters.jobType}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
          >
            <option value="">Any</option>
            <option value="Fixed">Fixed Price</option>
            <option value="Hourly">Hourly Rate</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-secondary">Experience Level</label>
          <select
            name="experienceLevel"
            value={filters.experienceLevel}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
          >
            <option value="">Any</option>
            <option value="Entry">Entry</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div>
            <label className="text-sm text-secondary">Min Budget</label>
            <input
              type="number"
              name="budgetMin"
              value={filters.budgetMin}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-secondary">Max Budget</label>
            <input
              type="number"
              name="budgetMax"
              value={filters.budgetMax}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-secondary">Client Rating</label>
          <input
            type="number"
            name="clientRating"
            value={filters.clientRating}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
            min="0"
            max="5"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-primary p-2 text-white rounded-lg text-sm hover:bg-secondary">
          Apply filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
