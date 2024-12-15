import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? "text-cyan-400" : "hover:text-neutral-600";

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
        className="block md:hidden focus:outline-none"
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
      {/* Desktop */}
      <div className="hidden md:flex md:flex-row items-center gap-4 text-2xl">
        <ul className="flex gap-4">
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
        <div className="flex flex-row items-center gap-4">
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

      {/* Mobile */}
      <div
        className={`${
          isOpen ? "right-20" : "-left-full"
        } absolute top-0 w-1/4 bg-white md:hidden z-50 transition-all duration-300`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-xl">
          <li>
            <Link
              to="/projects"
              className={`text-xl font-semibold ${getLinkClass("/projects")}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={`text-xl font-semibold ${getLinkClass("/resume")}`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-xl font-semibold ${getLinkClass("/contact")}`}
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Social Media Links for Mobile */}
        <div className="flex justify-center gap-6 py-4">
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
