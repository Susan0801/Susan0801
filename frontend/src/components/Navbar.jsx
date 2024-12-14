import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? "text-cyan-400" : "hover:text-gray-600";

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-md mb-20 flex items-center justify-between py-6 px-4 md:px-8">
      {/* Branding */}
      <div className="flex flex-shrink-0 items-center">
        <Link to="/">
          <div className="text-2xl font-bold italic bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent animate-pulse">
            Susan
          </div>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="block md:hidden focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="h-8 w-8 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex md:flex-row items-center gap-4 text-2xl ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-4">
          <li>
            <Link
              to="/projects"
              className={`ml-4 text-xl font-semibold ${getLinkClass("/projects")}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={`ml-4 text-xl font-semibold ${getLinkClass("/resume")}`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`ml-4 text-xl font-semibold ${getLinkClass("/contact")}`}
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row  items-center gap-4">
          <a
            href="https://www.linkedin.com/in/susan-liu-a255a516a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="text-2xl hover:text-cyan-500 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Susan0801/portfolia.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="text-2xl hover:text-cyan-500 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
