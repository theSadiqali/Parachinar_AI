

// src/components/KnowledgeCard.jsx
import React from "react";
import { FaSun, FaClock, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const iconMap = {
  weather: <FaSun className="text-yellow-400" />,
  prayer: <FaClock className="text-blue-400" />,
  festival: <FaStar className="text-pink-400" />,
  landmark: <FaMapMarkerAlt className="text-green-400" />,
};

const KnowledgeCard = ({ title, description, type }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl flex flex-col gap-2 hover:shadow-lg transition">
      <div className="text-3xl">{iconMap[type]}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default KnowledgeCard;



