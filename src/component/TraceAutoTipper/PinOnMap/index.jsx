import React, { useEffect, useRef, useState } from "react";

const GoogleMapWithCustomPin = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.9749, lng: -122.4194 }, // Default location: San Francisco
        zoom: 12,
      });
      setMap(map);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCV_KMd361LiXqgpElJRjjTYe5oKtuaG0A`;
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  const addMarker = () => {
    if (map) {
      const marker = new window.google.maps.Marker({
        position: map.getCenter(),
        map,
        icon: {
          url: "http://localhost:5173/src/assets/icons/auto-tipper.png", // Custom marker icon
          scaledSize: new window.google.maps.Size(40, 40),
        },
      });
      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    }
  };

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }}></div>
      <button 
        onClick={addMarker} 
        style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}
      >
        Add Custom Pin
      </button>
    </div>
  );
};

export default GoogleMapWithCustomPin;
