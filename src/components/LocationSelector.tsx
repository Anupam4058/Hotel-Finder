import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Select, { SingleValue } from 'react-select';  // Added SingleValue type

// Define proper types for the options
interface CityOption {
  value: string;
  label: string;
}

interface LocationSelectorProps {
  onLocationSelect: (location: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);  // Added loading state

  const cityOptions: CityOption[] = [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'texas', label: 'Texas' },  // Fixed capitalization for consistency
  ];

  // Improved type safety
  const handleLocationSelect = (option: SingleValue<CityOption>) => {
    if (option) {
      setSelectedLocation(option.label);
      onLocationSelect(option.label);
    }
  };

  const handleUseCurrentLocation = async () => {  // Made async
    if (!('geolocation' in navigator)) {
      alert('Geolocation is not supported by your browser. Please select a city manually.');
      return;
    }

    setIsLoading(true);
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const locationString = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
      setSelectedLocation(locationString);
      onLocationSelect(locationString);
    } catch (error) {
      console.error('Error getting location:', error);
      alert('Unable to retrieve your location. Please select a city manually.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-grow">
        <Select<CityOption>
          options={cityOptions}
          onChange={handleLocationSelect}
          placeholder="Select a city..."
          className="w-full"
          isSearchable
          isClearable
          value={cityOptions.find(option => option.label === selectedLocation) || null}
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
              ...theme.colors,
              primary25: '#e6f7ff',
              primary: '#3b82f6',
            },
          })}
        />
      </div>
      <button
        onClick={handleUseCurrentLocation}
        disabled={isLoading}
        className={`bg-blue-500 text-white p-2 rounded flex items-center ${
          isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
        }`}
      >
        <MapPin className="mr-1" size={18} />
        {isLoading ? 'Getting Location...' : 'Use My Location'}
      </button>
    </div>
  );
};

export default LocationSelector;