import React, { useState } from "react";
import About from './About';
import Experience from './Experience';
import Download from './Download';
import Technologies from './Technologies';

const Resume = () => {
  const [activeSection, setActiveSection] = useState("About");

  // Mapping section names to components
  const sections = {
    About: <About />,
    Technologies: <Technologies />,
    Experience: <Experience />,
    Download: <Download />,
  };

  // Handle mouse hover to change active section
  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Nav Bar */}
      
      <div>
        <nav className="w-1/4 p-6 mt-20" >
          <ul className="space-y-4">
          <li
              className="text-lg font-semibold hover:text-gray-600 cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Experience")}
            >
              Experience
            </li>
            
            <li
              className="text-lg font-semibold hover:text-gray-600 cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Technologies")}
            >
              Technologies
            </li>

            
            <li
              className="text-lg font-semibold hover:text-gray-600 cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Download")}
            >
              Download
            </li>

          </ul>

        </nav>
      </div>

      {/* Middle Content */}
      <div className=" flex min-h-screen flex flex-col w-3/4  text-center">
        {sections[activeSection]} {/* Render the active section content */}
      </div>
    </div>
  );
};

export default Resume;
