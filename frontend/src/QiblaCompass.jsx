// src/QiblaCompass.jsx
import React, { useEffect, useState } from "react";
import { getQiblaDirection } from "@masaajid/qibla";

export default function QiblaCompass() {
  const [bearing, setBearing] = useState(null);

  useEffect(() => {
    // Default to Parachinar coordinates for local testing
    const defaultCoords = { latitude: 33.9, longitude: 71.0 };
    const q = getQiblaDirection(defaultCoords);
    setBearing(q.bearing);
  }, []);

  if (bearing === null)
    return (
      <div className="qibla-card">
        <p>Calculating Qibla...</p>
      </div>
    );

  return (
    <div className="qibla-card">
      <h2 className="qibla-title">Qibla Direction</h2>
      <div className="qibla-compass">
        <div
          className="qibla-needle"
          style={{ transform: `rotate(${bearing}deg)` }}
        />
      </div>
      <p className="qibla-degree">{bearing.toFixed(2)}° from North</p>
      <p className="qibla-city">Parachinar</p>
    </div>
  );
}
