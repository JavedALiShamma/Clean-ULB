import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import { getDistance } from 'geolib';
import icon from "../../assets/icons/autoTipperLogo.png";
const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 28.022801,
  lng: 73.316119,
};

// Dummy route (you can replace it with actual coordinates from your backend)
const routeCoordinates = [
    { lat:28.024267, lng:73.318468 },
    { lat:28.024257, lng:73.317277 },
    {lat:28.0232433, lng:73.316193},
    {lat:28.022422, lng:73.316118},
    {lat:28.021251, lng:73.316092},
    {lat:28.020365, lng:73.316187},
    {lat:28.019730, lng:73.316235},
    {lat:28.018101, lng:73.314437},
    {lat:28.017078, lng:73.312073},
    {lat:28.016647, lng:73.310913},
  {lat:28.016298, lng:73.308246},
  //28.015735, 73.306058
  {lat:28.015735, lng:73.306058},
  //28.014958, 73.305133
  {lat:28.014958, lng:73.305133},
  //28.014288, 73.304412
  {lat:28.014288, lng:73.304412},
  //28.013702, 73.303812
  {lat:28.013702, lng:73.303812},
  {lat:28.012998, lng:73.303041},
  //28.012198, 73.302339
  {lat:28.012198, lng:73.302339},
  //28.011528, 73.301835
  {lat:28.011528, lng:73.301835},
  //
  {lat:28.011528, lng:73.301835},


];
const routeCoordinates1=[
 
  { lat:28.024267, lng:73.318468 },
  { lat:28.024257, lng:73.317277 },
  {lat:28.0232433, lng:73.316193},
  {lat:28.022422, lng:73.316118},
  {lat:28.021251, lng:73.316092},
  {lat:28.020365, lng:73.316187},
  {lat:28.019730, lng:73.316235},
  {lat:28.018101, lng:73.314437},
  {lat:28.017078, lng:73.312073},
  {lat:28.017177, lng:73.312073},
  {lat:28.016647, lng:73.310913},
  {lat:28.016298, lng:73.308246},
  //28.015735, 73.306058
  {lat:28.015735, lng:73.306058},
  //28.014958, 73.305133
  {lat:28.014958, lng:73.305133},
  //28.014288, 73.304412
  {lat:28.014288, lng:73.304412},
  //28.013702, 73.303812
  {lat:28.013702, lng:73.303812},
  //28.012998, 73.303041 // new 
  {lat:28.012998, lng:73.303041},
  //28.012198, 73.302339
  {lat:28.012198, lng:73.302339},
  //28.011528, 73.301835
  {lat:28.011528, lng:73.301835},
  //
  {lat:28.011528, lng:73.301835},

];

const VehicleTracker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [traveled, setTraveled] = useState(0);
  const [startTime] = useState(Date.now());
  const totalDistance = useRef(0);

  useEffect(() => {
    // Calculate total route distance
    let distance = 0;
    for (let i = 0; i < routeCoordinates.length - 1; i++) {
      distance += getDistance(routeCoordinates[i], routeCoordinates[i + 1]);
    }
    totalDistance.current = distance;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < routeCoordinates.length - 1) {
            setInterval(()=>{
                console.log("interval");
            },5000)
          const dist = getDistance(routeCoordinates[prev], routeCoordinates[prev + 1]);
          setTraveled((t) => t + dist);
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 3000); // 3 seconds update

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div>
        {/* //google map api key REMOVE S FROM START OF API KEY */}
      <LoadScript googleMapsApiKey="AIzaSyCV_KMd361LiXqgpElJRjjTYe5oKtuaG0A">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Polyline
            path={routeCoordinates}
            options={{ strokeColor: 'green', strokeOpacity: 1, strokeWeight: 2 }}
          />
          <Marker icon={icon} position={routeCoordinates[currentIndex]} />
        <Polyline
            path={routeCoordinates1}
            options={{ strokeColor: 'green', strokeOpacity: 1, strokeWeight: 2 }}
          />
        </GoogleMap>
      </LoadScript>

      <div style={{ padding: '20px', background: '#f5f5f5', marginTop: '20px' }}>
        <h3 className='text-center, text-primary'>Vehicle Tracking Info</h3>
        <p><strong>Total Distance:</strong> {(totalDistance.current / 1000).toFixed(2)} km</p>
        <p><strong>Distance Traveled:</strong> {(traveled / 1000).toFixed(2)} km</p>
        <p><strong>Distance Left:</strong> {((totalDistance.current - traveled) / 1000).toFixed(2)} km</p>
        <p><strong>Time Elapsed:</strong> {formatTime(Date.now() - startTime)}</p>
      </div>
    </div>
  );
};

export default VehicleTracker;
