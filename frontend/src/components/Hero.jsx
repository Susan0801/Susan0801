// src/components/Hero.jsx
import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion'; // Import motion
import profilePic from '../assets/hero.jpg';

const Hero = () => {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: { opacity: 1, y: 0 },  // Final state
  };

  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-center text-6xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.1 }} // Animation duration and delay
            >
             Hello, I am Susan(Xia), a
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className="max-w-xl py-6 font-light tracking-tighter text-black"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="my-10 w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img className="rounded-full w-96 h-96 object-cover" 
              src={profilePic}
              alt=""
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 4,repeat: Infinity, repeatType: "loop" }} // Animation duration and delay
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
