import React, { useEffect, useRef, useState } from "react";
import latlongTipper from "./latLongTipper.js"
import LiveLocationTracker from "../liveTrackerMaps/index.jsx";

const GoogleMapView = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [lat, setLat] = useState(27.7968);
  const [lng, setLng] = useState(73.3438);

  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 27.7968, lng: 73.3438 }, // Default location: San Francisco
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
    // if (map) {
    //   latlongTipper.map((ele)=>{
    //     console.log(ele);
    //     const {id,lat,lng}=ele;
    //     const position =`{lat:${(lat)}, lng:${(lng)}}`;
    //     const marker = new window.google.maps.Marker({
    //       position,
    //       map,
    //       icon: {
    //         url: "http://localhost:5173/src/assets/icons/auto-tipper.png", // Custom marker icon
    //         scaledSize: new window.google.maps.Size(40, 40),
    //       },
    //     });
    //     setMarkers((prevMarkers) => [...prevMarkers, marker]);
        
    // }
      
    //   )
    // }
    // if(map){
    //   const position = { lat: parseFloat(lat), lng: parseFloat(lng) };
    //   const marker = new window.google.maps.Marker({
    //     position,
    //     map,
    //     icon: {
    //       url: "http://localhost:5173/src/assets/icons/auto-tipper.png", // Custom marker icon
    //       scaledSize: new window.google.maps.Size(40, 40),
    //     },
    //   });
    //   setMarkers((prevMarkers) => [...prevMarkers, marker]);
    // }
  };

  return (
    <>
   <div>
      <div ref={mapRef} style={{ width: "100%", height: "1px", display:"none" }}></div>
      <button 
        onClick={addMarker} 
        style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}
      >
    
      </button>
    </div>
  
    <LiveLocationTracker/>
    </>
   
  );
};

export default GoogleMapView;
