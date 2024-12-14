import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Download = () => {
  return (
    <div className="pb-4 -mt-10">
      <h1 className="my-20 text-center text-4xl text-black">Download Resume</h1>
      <div className="my-10 flex justify-center">
        <a
          href="../constants/Susan_Liu_resume.pdf"
          download="Susan_Liu_Resume.pdf"
          className="flex items-center px-6 py-2 text-lg font-semibold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaDownload className="mr-2" /> Download
        </a>
      </div>
    </div>
  );
};

export default Download;
