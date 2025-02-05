import { StaticImageData } from "next/image";

interface FreelancerProps {
  id: string;
  name: string;
  title: string;
  price: string;
  bio: string;
  skills: string[];
  location: string;
  rating: number;
  languages?: string[];
  linkedAccounts?: {
    linkedin: string;
    github: string;
    portfolio: string;
  };
  educationalHistory?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  workHistory?: {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
  }[];
  portfolio?: {
    title: string;
    description: string;
    link: string;
  }[];
  testimonials?: {
    name: string;
    testimonial: string;
  }[];

  profilePicture?: StaticImageData;
}

export default FreelancerProps;
