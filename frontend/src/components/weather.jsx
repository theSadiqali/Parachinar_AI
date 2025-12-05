import React, { useState, useEffect } from 'react';

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.8975&lon=70.0956&appid=YOUR_OPENWEATHER_API_KEY&units=metric`);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.warn(err);
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div style={{ background: '#fff', padding: 20, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h3>Parachinar Weather</h3>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}
