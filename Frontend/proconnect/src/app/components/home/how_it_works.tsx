"use client";
import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineCreditCard,
} from "react-icons/hi";

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-primary mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div
            className="flex flex-col items-center text-center rounded-lg bg-gray-50 shadow-lg p-2 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-secondary mb-4">
              <HiOutlineUserGroup color="#1A1A55" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Step 1: Sign Up & Create a Profile
            </h3>
            <p className="text-lg text-gray-600">
              Whether you&apos;re a freelancer or a client, sign up and create
              your profile to get started.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center bg-gray-50 shadow-lg p-2 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-6xl text-secondary mb-4">
              <HiOutlineBriefcase color="#1A1A55" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Step 2: Post a Job or Browse Gigs
            </h3>
            <p className="text-lg text-gray-600">
              Clients can post job listings, while freelancers can browse
              available gigs and apply.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center bg-gray-50 shadow-lg p-2 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-6xl text-secondary mb-4">
              <HiOutlineCreditCard color="#1A1A55" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Step 3: Hire, Work, & Get Paid Securely
            </h3>
            <p className="text-lg text-gray-600">
              Once hired, freelancers can work on the project and get paid
              securely through the platform.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
