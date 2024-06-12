import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const SetViewOnClick = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, map.getZoom());
  }
  return null;
};

const GeolocationMap = () => {
  // Coordenadas de la Universidad Tecnológica de la Zona Metropolitana de Guadalajara
  const utzmgCoords = [20.4830966, -103.5331819];
  const [location, setLocation] = useState(utzmgCoords);
  const [error, setError] = useState(null);

  const goToUTZMG = () => {
    setLocation(utzmgCoords);
    setError(null); // Clear previous errors if any
  };

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
    <div className="flex flex-col items-center justify-center min-h-screen px-4" style={{ marginTop: '-5cm', marginBottom: '-7.5cm' }}>
      <h1 className="text-2xl font-bold mb-2">Geolocalización</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <MapContainer
          center={utzmgCoords}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
           
          />
          <SetViewOnClick coords={location} />
        </MapContainer>
      </div>
    </div>
  );
};

export default GeolocationMap;
