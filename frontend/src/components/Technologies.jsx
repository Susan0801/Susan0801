import { RiReactjsLine } from "react-icons/ri"; // Import ReactJS icon
import { TbBrandNextjs } from "react-icons/tb"; // Import NextJS icon
import { FaNodeJs } from "react-icons/fa"; // Import Node.js icon
import { SiMongodb, SiPostgresql } from "react-icons/si"; // Import MongoDB and PostgreSQL icons
import { FaVuejs } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import motion

const Technologies = () => {
  // Define animation variants for each icon
  const iconVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 0.6, // Duration of one complete up-down motion
        ease: "easeInOut",
        yoyo: Infinity, // Repeat the animation infinitely
      },
    },
  };

  // Define container variants for staggering
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5, // Stagger the animations by 0.2 seconds
      },
    },
  };

  return (
    <div className="pb-24">
      <h1 className="my-10 text-center text-4xl text-black">Technologies</h1>
      <motion.div
        className="flex flex-wrap ml-30 items-center justify-center gap-4"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants}>
          <TbBrandNextjs className="text-7xl text-gray-400" />
        </motion.div>
        
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants}>
          <SiMongodb className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants}>
          <SiPostgresql className="text-7xl text-cyan-400" />
        </motion.div>
        
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants}>
          <FaVuejs className="text-7xl text-red-400" />
        </motion.div>
        
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants}>
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        

      </motion.div>
    </div>
  );
};

export default Technologies;
