import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Hotel } from '../types';

interface MapViewProps {
  hotels: Hotel[];
}

const MapView: React.FC<MapViewProps> = ({ hotels }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  });

  const mapContainerStyle = {
    width: '100%',
    height: '600px',
  };

  const center = {
    lat: hotels[0]?.lat || 0,
    lng: hotels[0]?.lng || 0,
  };

  if (!apiKey) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> Google Maps API key is not set. Please add your API key to the .env file.</span>
      </div>
    );
  }

  if (loadError) {
    const errorMessage = loadError.message.includes('BillingNotEnabledMapError')
      ? 'Billing is not enabled for the Google Maps JavaScript API. Please enable billing in the Google Cloud Console.'
      : 'Failed to load Google Maps. Please check your API key and ensure billing is enabled.';

    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {errorMessage}</span>
      </div>
    );
  }

  if (!isLoaded) {
    return <div className="text-center py-4">Loading maps...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={12}
    >
      {hotels.map((hotel) => (
        <Marker
          key={hotel.id}
          position={{ lat: hotel.lat, lng: hotel.lng }}
          title={hotel.name}
        />
      ))}
    </GoogleMap>
  );
};

export default MapView;