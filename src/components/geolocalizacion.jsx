import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png'; // Ruta de tu icono de marcador

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



  // Crear el ícono de marcador personalizado
  const customMarkerIcon = L.icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41], // Tamaño del ícono
    iconAnchor: [12, 41], // Punto del ícono que corresponde a la ubicación del marcador
    popupAnchor: [1, -34], // Punto desde donde se abrirá el popup en relación con el ícono
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4" style={{ marginTop: '-5cm', marginBottom: '-6cm' }}>
      <h1 className="text-2xl font-bold mb-2">Ubicación</h1>
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
          <Marker position={utzmgCoords} icon={customMarkerIcon}>
            <Popup>
              Universidad Tecnológica de la Zona Metropolitana de Guadalajara
            </Popup>
          </Marker>
          <SetViewOnClick coords={location} />
        </MapContainer>
      </div>
    </div>
  );
};

export default GeolocationMap;
