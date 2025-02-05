"use client";

import { useState } from "react";

const FilterSection = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    type: "",
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
      <h2 className="text-md font-semibold text-primary">Filter freelancers</h2>
      <div className="grid grid-rows-2 lg:flex flex-col lg:flex-row lg-items-center lg-justify-center gap-4 mt-2">
        <div>
          <label className="text-sm text-secondary">Developer Type</label>
          <select
            name="experienceLevel"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md outline-none text-sm"
          >
            <option value="" className="text-sm">
              Any
            </option>
            <option value="frontend" className="text-sm">
              Frontend
            </option>
            <option value="backend" className="text-sm">
              Backend
            </option>
            <option value="full_stack" className="text-sm">
              Fullstack
            </option>
            <option value="machine_learning" className="text-sm">
              Machine Learning
            </option>
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
