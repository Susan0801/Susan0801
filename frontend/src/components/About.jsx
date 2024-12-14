// src/components/About.jsx
import React from 'react';
import { ABOUT_TEXT } from '../constants';
import aboutImg from '../assets/cs.jpg';
import { motion } from 'framer-motion'; // Import motion

const About = () => {
  // Define the animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state for the image (from the left)
    visible: { opacity: 1, x: 0 },   // Final state
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },   // Initial state for the text (from the right)
    visible: { opacity: 1, x: 0 },   // Final state
  };

  return (
    <div className="pb-24">
      <h1 className="text-center text-4xl text-black">
        About Me
      </h1>
      <div className="flex pt-20 flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5 }} // Animation duration for the image
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="max-w-xl font-light py-6 text-black"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered animation
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
