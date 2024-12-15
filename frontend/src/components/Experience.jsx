import React from 'react';
import { EXPERIENCES } from '../constants/index';
import { motion } from 'framer-motion'; // Import motion

const Experience = () => {
  // Define animation variants for the timeline items
  const itemVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6, // Animation duration
        ease: "easeInOut"
      }
    },
  };

  const yearVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6, // Animation duration
        ease: "easeInOut"
      }
    },
  };

  return (
    <div className=" pb-24">
      <h1 className="my-10 text-center text-4xl text-black">Experience</h1>
      <div text-justify>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              animate="visible"
              variants={yearVariants}
              transition={{ delay: index * 0.2 }} // Stagger each year with a delay
            >
              <p className="mb-2 text-sm text-neutral-600">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ delay: index * 0.2 }} // Stagger each item with a delay
            >
              <h6 className="mb-2 text-neutral-600 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-600">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="mr-2 text-sm text-cyan-500">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
