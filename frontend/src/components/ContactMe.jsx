import React, { useState } from 'react';
import { CONTACT } from '../constants/index';
import Map from './Map'; // Import the Map component
import { motion } from 'framer-motion'; // Import motion
import axios from 'axios'; // Import axios

const ContactMe = () => {
  const leftVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setResponseMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setResponseMessage('');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/submission',
        { name, email },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setResponseMessage(response.data.message || 'Form submitted successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage(
        error.response?.data?.message || 'Failed to submit the contact form. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="py-10 px-5 text-center text-black font-light">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <p className="mt-4">Address: {CONTACT.address}</p>
          <p>Phone: {CONTACT.phoneNo}</p>
          <p>Email: {CONTACT.email}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-0.5 px-2 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-neutral-600">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-0.5 px-2 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="py-10 px-5 text-center text-black font-light">
            <button
              type="submit"
              className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 rounded text-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Display the response message */}
        {responseMessage && (
          <p className={`text-center mt-4 ${responseMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {responseMessage}
          </p>
        )}
      </motion.div>

      <motion.div
        className="md:w-1/2 py-10 px-5"
        initial="hidden"
        animate="visible"
        variants={rightVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default ContactMe;
