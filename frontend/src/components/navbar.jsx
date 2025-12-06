// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 transition-colors">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Parachinar</h1>
      <ul className="flex gap-6 items-center">
        <li className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Home</li>
        <li className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">History</li>
        <li className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Culture</li>
        <li className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Chatbot</li>
        <li onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-gray-600 dark:text-gray-300">
          {darkMode ? <FaSun /> : <FaMoon />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
