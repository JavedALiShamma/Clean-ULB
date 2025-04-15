import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";
import totalDistanceTravelled from "../TraceAutoTipper/DistanceCoveredByTipper";
// import 'dotenv/config';
// const dotenv = require('dotenv');
// import 'dotenv/config';
// require('dotenv').config();


// Google Key must be uncomment for the live location tracking
const googleKey="AIzaSyCV_KMd361LiXqgpElJRjjTYe5oKtuaG0A";
const containerStyle = {
  width: "100%",
  height: "700px",
};

const initialLocation = { lat: 28.0461, lng: 73.3097 };
console.log("refreshed");

const LiveUserLocation = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleKey,
  });

  const [location, setLocation] = useState(initialLocation);
  const [path, setPath] = useState([initialLocation]);


  // This is need to be uncommit for the live location tracking
  useEffect(() => {
    const updateLocation = () => {
      // Simulating slight movement by adding small random values
      const newLocation = {
        // lat: location.lat + (Math.random() - 0.5) * 0.001,
        // lng: location.lng + (Math.random() - 0.5) * 0.001,
        lat: 28.0410+ (Math.random() - 0.5) * 0.001,
        lng:73.3316+ (Math.random() - 0.5) * 0.001,
      };
      setLocation(newLocation);
      setPath((prevPath) => [...prevPath, newLocation]);
     
    };

    updateLocation(); // Initial update
    const interval = setInterval(updateLocation, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <>
      <div>
      <h2 className="text-center text-primary">Live Locations of Auto-tipper Running in the ULB </h2>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} icon="http://localhost:5173/src/assets/icons/autoTipperLogo.png"  title="Auto_tipper1"/>
        <Marker position={{ lat: 28.0461, lng: 73.3097 }}    />
        <Polyline path={path} options={{ strokeColor: "#4E9C91", strokeWeight: 4 }}  icon="http://localhost:5173/src/assets/icons/autoTipperLogo.png"  title="Auto_tipper1" />
      </GoogleMap>
    </div>
   
    </>
  
  );
};

export default LiveUserLocation;
