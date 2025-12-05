import React from "react";
import Navbar from "../components/Navbar";
import KnowledgeCard from "../components/KnowledgeCard";
import Chatbot from "../components/Chatbot";

const Home = () => {
  const knowledgeData = [
    { title: "Ashura in Parachinar", description: "Observed by Shia Muslims with processions and community gatherings.", image: "/images/ashura.jpg" },
    { title: "Local Cuisine", description: "Chapli kebab, fresh breads, and festival dishes.", image: "/images/cuisine.jpg" },
    { title: "Landmarks", description: "Peiwar Pass, Parachinar Bazaar, mosques.", image: "/images/landmarks.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Welcome to Parachinar Info Hub
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Explore Parachinar’s culture, history, cuisine, and landmarks. Ask our AI chatbot for more insights about Parachinar and its Shia community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {knowledgeData.map((item, idx) => (
            <KnowledgeCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Home;
