import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const SetViewOnClick = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, map.getZoom());
  }
  return null;
};

const GeolocationMap = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Geolocation API with Map</h1>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get Location
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px", width: "100%", marginTop: "20px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {location && <Marker position={location}></Marker>}
        <SetViewOnClick coords={location} />
      </MapContainer>
    </div>
  );
};

export default GeolocationMap;
