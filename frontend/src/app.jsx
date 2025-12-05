import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import KnowledgeCard from "./components/KnowledgeCard";
import Chatbot from "./components/Chatbot";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [weather, setWeather] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);

  // Fetch weather for Parachinar
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Parachinar&units=metric&appid=0ed46feb58c6213070957e32a1acac58")
      .then((res) => res.json())
      .then((data) => setWeather(data));
    
    // Example for prayer times (use API like Aladhan)
    fetch("https://api.aladhan.com/v1/timingsByCity?city=Parachinar&country=PK&method=2")
      .then((res) => res.json())
      .then((data) => setPrayerTimes(data.data.timings));
  }, []);

  const knowledgeData = [
    {
      title: "Weather",
      description: weather
        ? `${weather.main.temp}°C, ${weather.weather[0].description}`
        : "Loading...",
      type: "weather",
    },
    {
      title: "Prayer Times",
      description: prayerTimes
        ? `Fajr: ${prayerTimes.Fajr}, Dhuhr: ${prayerTimes.Dhuhr}, Asr: ${prayerTimes.Asr}`
        : "Loading...",
      type: "prayer",
    },
    {
      title: "Festivals",
      description: "Ashura, Eid Milad, and other Shia community events.",
      type: "festival",
    },
    {
      title: "Landmarks",
      description: "Peiwar Pass, Parachinar Bazaar, local mosques.",
      type: "landmark",
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Welcome to Parachinar Info Hub
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Explore Parachinar’s culture, history, cuisine, landmarks, and Shia community. Ask our AI chatbot for more insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeData.map((item, idx) => (
            <KnowledgeCard key={idx} {...item} />
          ))}
        </div>
      </main>

      <Chatbot /> {/* Floating Chatbot */}
    </div>
  );
}

export default App;
