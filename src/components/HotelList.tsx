import React from 'react';
import { Star, DollarSign, MapPin } from 'lucide-react';
import { Hotel } from '../types';

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
            <div className="flex items-center mb-2">
              <Star className="text-yellow-400 mr-1" size={18} />
              <span>{hotel.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center mb-2">
              <DollarSign className="text-green-500 mr-1" size={18} />
              <span>{hotel.price} per night</span>
            </div>
            <div className="flex items-center mb-2">
              <MapPin className="text-red-500 mr-1" size={18} />
              <span>{hotel.distance.toFixed(1)} km away</span>
            </div>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded w-full">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;