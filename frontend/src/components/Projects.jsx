import { motion } from "framer-motion"; // Import motion from framer-motion
import { PROJECTS } from "../constants/index"; // Adjust the path according to your file structure

const Projects = () => {
  // Define animation variants for the project items
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0, // Slide from left or right
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0, // Slide from up or down
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6, // Animation duration
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mb-20 -mt-2">
      <div>
        {PROJECTS.map((project, index) => {
          // Determine the direction based on index
          const direction = index % 2 === 0 ? 'left' : 'right'; // Alternate between left and right
          return (
            <motion.div
              key={project.id}
              className="mb-8 flex flex-wrap lg:justify-center"
              initial="hidden"
              animate="visible"
              custom={direction} // Pass the direction to the variants
              variants={variants}
              transition={{ delay: index * 0.4 }} // Stagger each project with a delay
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={`Image of ${project.title}`}
                  className="mb-6 rounded"
                  onLoad={() => console.log(`${project.title} image loaded`)} // Optional: Handle loading
                  onError={() => console.error(`Error loading image for ${project.title}`)} // Optional: Handle error
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 text-neutral-600 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-600">{project.description}</p>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-sm text-cyan-500 mr-2">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
