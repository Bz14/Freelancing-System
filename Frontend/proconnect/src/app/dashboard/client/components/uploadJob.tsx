"use client";
import { useState } from "react";

const UploadJob = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    details: "",
    paymentType: "",
    paymentAmount: "",
    skills: [] as string[],
    deadline: "",
    experienceLevel: "",
    location: "",
  });

  const handleAddSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
    setNewSkill("");
    setIsInputVisible(false);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Job Submitted:", formData);
      setIsSubmitting(false);
      alert("Job posted successfully!");
      // Reset form
      //   setFormData({
      //     title: "",
      //     description: "",
      //     budget: "",
      //     category: categories[0],
      //     deadline: "",
      //     files: [],
      //   });
    }, 1500);
  };

  return (
    <div className="lg:mx-10 bg-white p-6 shadow-md rounded-md mt-4">
      <h1 className="text-2xl font-bold text-primary mb-4">Upload a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-secondary">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label className="block font-semibold text-secondary">
              Job Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
              placeholder="Enter a one line description about the job"
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold text-secondary">
            Job Details
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1 outline-none text-secondary"
            placeholder="Describe the job requirements in detail..."
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-secondary">
              Category
            </label>
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
            >
              {["Fixed", "Hourly"].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-secondary">
              Payment Amount ($)
            </label>
            <input
              type="number"
              name="paymentAmount"
              value={formData.paymentAmount}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
              placeholder="Enter job budget"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-secondary mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                {skill}
              </span>
            ))}
            <button
              onClick={() => setIsInputVisible(true)}
              className="bg-primary p-2 rounded-full text-lg font-bold text-white"
            >
              +
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {isInputVisible && (
              <>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Enter skill"
                  className="border p-1 rounded w-40 outline-none text-secondary"
                />
                <button
                  onClick={() => handleAddSkill()}
                  className="bg-primary text-white px-3 py-1 rounded"
                >
                  Add
                </button>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold text-secondary">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
            >
              {["Beginner", "Mid Level", "Expert"].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-secondary">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mt-1 outline-none text-secondary"
              placeholder="Enter job location"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-fit p-20 bg-primary text-white py-2 rounded font-semibold ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-secondary"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Upload Job"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadJob;
