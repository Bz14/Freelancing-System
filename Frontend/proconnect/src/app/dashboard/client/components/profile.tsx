"use client";
import Image from "next/image";
import { FaEdit, FaPhone, FaSave, FaTimes } from "react-icons/fa";
import { useState } from "react";
import img from "@public/assets/Images/person1.jpg";

const ClientProfile = () => {
  // State for form fields
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    company: "Tech Solutions Ltd.",
    email: "johndoe@example.com",
    contact: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "I am a software engineer with 5 years of experience in web development.",
    profilePic: img,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProfile({ ...profile, profilePic: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6 w-full mx-auto lg:mt-4">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src={profile.profilePic}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full border-2 border-gray-300"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleProfilePicChange}
            />
          )}
        </div>

        <div className="text-secondary">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border p-2 rounded w-full outline-none"
            />
          ) : (
            <h2 className="text-xl font-semibold text-primary">
              {profile.name}
            </h2>
          )}

          {isEditing ? (
            <input
              type="text"
              name="company"
              value={profile.company}
              onChange={handleChange}
              className="border p-2 rounded w-full mt-1 outline-none"
            />
          ) : (
            <p className="text-gray-500">{profile.company}</p>
          )}

          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border p-2 rounded w-full mt-1 outline-none"
            />
          ) : (
            <p className="text-gray-500">{profile.email}</p>
          )}

          {isEditing ? (
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="border p-2 rounded w-full mt-1 outline-none"
            />
          ) : (
            <p className="text-gray-500">{profile.location}</p>
          )}

          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="border p-2 rounded w-full mt-1 outline-none"
              rows={3}
            />
          ) : (
            <p className="text-gray-500">{profile.bio}</p>
          )}
        </div>

        <button
          className="ml-auto text-primary hover:text-secondary"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <FaTimes size={20} className="text-primary" />
          ) : (
            <FaEdit size={20} className="text-primary" />
          )}
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-primary text-white p-4 rounded shadow text-center">
          <h3 className="lg:text-lg font-semibold">Total Jobs Posted</h3>
          <p className="lg:text-2xl font-bold">12</p>
        </div>
        <div className="bg-secondary text-white p-4 rounded shadow text-center flex flex-col items-center justify-center space-y-2">
          <FaPhone size={20} />

          <p className="lg:text-lg">{profile.contact}</p>
        </div>
      </div>

      {isEditing && (
        <div className="mt-4 flex justify-center">
          <button
            className="bg-primary text-white px-4 py-2 rounded shadow flex items-center space-x-2"
            onClick={() => setIsEditing(false)}
          >
            <FaSave />
            <span>Save Changes</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientProfile;
