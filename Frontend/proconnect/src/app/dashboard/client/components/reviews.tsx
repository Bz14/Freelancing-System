"use client";
import { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";

type Review = {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
};

type ReviewsData = {
  [key: string]: Review[];
};

const dummyReviews: ReviewsData = {
  proj1: [
    {
      id: "rev1",
      reviewer: "Alice Johnson",
      rating: 5,
      comment: "Great client! Clear communication and fast payment.",
    },
    {
      id: "rev2",
      reviewer: "Bob Smith",
      rating: 4,
      comment: "Good experience, but response time could be improved.",
    },
  ],
  proj2: [
    {
      id: "rev3",
      reviewer: "Diana Prince",
      rating: 5,
      comment: "Excellent to work with! Looking forward to future projects.",
    },
  ],
  proj3: [],
};

const Reviews = () => {
  const [selectedProject, setSelectedProject] = useState("proj1");

  return (
    <div className="bg-white p-4 shadow-md rounded-md w-full mt-4">
      <h2 className="text-lg font-bold text-primary mb-3">Client Reviews</h2>
      <label className="text-secondary font-semibold">Select Project:</label>
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
        className="w-full p-2 border rounded mt-2 outline-none text-secondary"
      >
        <option value="proj1" className="text-secondary text-sm">
          Website Development
        </option>
        <option value="proj2" className="text-secondary text-sm">
          Mobile App UI/UX Design
        </option>
        <option value="proj3" className="text-secondary text-sm">
          API Development
        </option>
      </select>

      <div className="mt-4">
        {dummyReviews[selectedProject].length > 0 ? (
          dummyReviews[selectedProject].map((review) => (
            <div
              key={review.id}
              className="bg-primary text-white p-3 rounded-md mb-3 shadow"
            >
              <div className="flex items-center gap-2">
                <FaUser />
                <span className="font-semibold">{review.reviewer}</span>
              </div>
              <div className="flex items-center mt-1 text-yellow-500">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <p className="mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-primary">No reviews for this project yet.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
