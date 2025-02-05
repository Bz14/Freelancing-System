import React from "react";
import img from "../../../../public/assets/Images/person1.jpg";
import Profile from "./components/profile";
import Bio from "./components/bio";
import Skills from "./components/skills";
import Languages from "./components/languages";
import Accounts from "./components/accounts";
import Education from "./components/education";
import Work from "./components/work";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Rating from "./components/rating";

const freelancerProfile = {
  id: "1",
  name: "John Doe",
  profilePicture: img,
  title: "Full Stack Developer",
  hourlyRate: "$50/hr",
  bio: "I'm a full-stack developer with over 5 years of experience. I specialize in React, Node.js, and building scalable web applications.",
  languages: ["English", "Spanish"],
  location: "Remote, UTC-5",
  rating: 4.8,
  linkedAccounts: {
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoeportfolio.com",
  },
  educationalHistory: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "XYZ University",
      year: "2018",
    },
    {
      degree: "Certified Full Stack Developer",
      institution: "ABC Bootcamp",
      year: "2020",
    },
  ],
  workHistory: [
    {
      jobTitle: "Senior Full Stack Developer",
      company: "Tech Solutions",
      duration: "2 years",
      description:
        "Developed scalable web applications and integrated third-party APIs.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Web Innovators",
      duration: "3 years",
      description:
        "Worked on creating user-friendly interfaces and improving user experience using React.",
    },
  ],
  skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "GraphQL"],
  portfolio: [
    {
      title: "E-commerce Platform",
      description:
        "Built a complete e-commerce platform using React and Node.js.",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "Developed a task management app with real-time updates and user authentication.",
      link: "https://example.com/task-management",
    },
  ],
  testimonials: [
    {
      clientName: "Client A",
      feedback:
        "John is an excellent developer. He delivered the project on time and exceeded expectations.",
      rating: 5,
    },
    {
      clientName: "Client B",
      feedback:
        "Great communication and problem-solving skills. Highly recommend!",
      rating: 4.5,
    },
  ],
};

const FreelancerProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-6 lg:w-3/4">
      <Profile
        profilePicture={freelancerProfile.profilePicture}
        name={freelancerProfile.name}
        title={freelancerProfile.title}
        location={freelancerProfile.location}
        hourlyRate={freelancerProfile.hourlyRate}
      />
      <Bio bio={freelancerProfile.bio} />
      <Skills skills={freelancerProfile.skills} />
      <Languages languages={freelancerProfile.languages} />
      <Accounts linkedAccounts={freelancerProfile.linkedAccounts} />
      <Education educationalHistory={freelancerProfile.educationalHistory} />
      <Work workHistory={freelancerProfile.workHistory} />
      <Portfolio portfolio={freelancerProfile.portfolio} />
      <Testimonials testimonials={freelancerProfile.testimonials} />
      <Rating rating={freelancerProfile.rating} />

      <div className="flex space-x-4">
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
          Contact Freelancer
        </button>
        <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-500">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default FreelancerProfilePage;
