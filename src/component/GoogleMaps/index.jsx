import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const GoogleMapView = () => (
  <APIProvider apiKey={"AIzaSyCV_KMd361LiXqgpElJRjjTYe5oKtuaG0A"}>
    <Map
      style={{width: '100%', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 23.51331}}
      defaultZoom={5}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);
export default GoogleMapView;