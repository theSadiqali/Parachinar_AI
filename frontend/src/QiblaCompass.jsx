// src/QiblaCompass.jsx
import React, { useEffect, useState } from "react";

// ✅ Step 1: Add constants for coordinates
const latParachinar = 33.9;
const lonParachinar = 71.0;
const latKaaba = 21.4225;
const lonKaaba = 39.8262;

// ✅ Step 2: Helper function to calculate Qibla bearing
function getQiblaBearing(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const toDeg = (rad) => (rad * 180) / Math.PI;

  const phi1 = toRad(lat1);
  const phi2 = toRad(lat2);
  const deltaLambda = toRad(lon2 - lon1);

  const y = Math.sin(deltaLambda);
  const x =
    Math.cos(phi1) * Math.tan(phi2) - Math.sin(phi1) * Math.cos(deltaLambda);

  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

// ✅ Step 3: Your component
export default function QiblaCompass() {
  const [bearing, setBearing] = useState(null);

  useEffect(() => {
    const qibla = getQiblaBearing(latParachinar, lonParachinar, latKaaba, lonKaaba);
    setBearing(qibla);
  }, []);

  if (bearing === null) return <div>Calculating Qibla...</div>;

  return (
    <div className="qibla-card">
      <h2>Qibla Direction</h2>
      <div className="qibla-compass">
        <div
          className="qibla-needle"
          style={{ transform: `rotate(${bearing}deg)` }}
        />
      </div>
      <p>{bearing.toFixed(2)}° from North</p>
      <p>Parachinar</p>
    </div>
  );
}
