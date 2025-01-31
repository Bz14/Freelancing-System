"use client";
import Image from "next/image";
import img from "../../../public/assets/Images/hero_1.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-primary ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left ml-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-white leading-tight">
            Find the Best Talent or Your Next Big Gig.
          </h1>
          <p className="text-white mt-4 text-lg">
            Connect with top freelancers or start your freelancing journey
            today.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/signup"
              className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="/signup"
              className="border border-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary hover:text-white transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join as Freelancer
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src={img}
            width={1000}
            height={600}
            alt="Freelancing Illustration"
            className="w-full max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
