"use client";
import React, { useState } from "react";

const SubmitProposal = () => {
  const [proposal, setProposal] = useState({
    coverLetter: "",
    expectedPayment: "",
    deliveryTime: "",
    files: null,
    answers: {},
  });

  const handleFileChange = (e) => {
    setProposal({ ...proposal, files: e.target.files[0] });
  };

  const handleChange = (e) => {
    setProposal({ ...proposal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proposal submitted:", proposal);
  };

  return (
    <div className="container mx-auto px-4 py-16 lg:w-3/4 ">
      <div className="shadow-md rounded-lg p-14 bg-primary text-white">
        <h2 className="text-xl font-semibold mb-4">Submit Your Proposal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={proposal.coverLetter}
              onChange={handleChange}
              className="w-full p-2 border rounded-md outline-none text-sm text-secondary"
              placeholder="Explain why you're the best fit for this job..."
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Expected Payment
              </label>
              <input
                type="number"
                name="expectedPayment"
                value={proposal.expectedPayment}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm outline-none text-secondary"
                placeholder="Enter your rate (if applicable)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Delivery Time (Days)
              </label>
              <input
                type="number"
                name="deliveryTime"
                value={proposal.deliveryTime}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm outline-none text-secondary"
                placeholder="Enter estimated completion time"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Attach Resume
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Attach Sample Work Portfolio
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 border rounded-md text-sm"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              type="submit"
              className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-300"
            >
              Submit Proposal
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProposal;
