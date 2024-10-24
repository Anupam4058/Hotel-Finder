import React from 'react';
import { Star, DollarSign, Coffee, MapPin } from 'lucide-react';

interface FilterSectionProps {
  filters: {
    foodRating: number;
    costEfficiency: string;
    ambiance: string;
    distance: number;
  };
  onFilterChange: (filters: FilterSectionProps['filters']) => void;
  onApplyFilters: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, onFilterChange, onApplyFilters }) => {
  const handleFilterChange = (key: keyof FilterSectionProps['filters'], value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="flex items-center mb-2">
            <Star className="mr-2 text-yellow-400" size={18} />
            Food Rating
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={filters.foodRating}
            onChange={(e) => handleFilterChange('foodRating', parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-600">{filters.foodRating} stars</div>
        </div>
        <div>
          <label className="flex items-center mb-2">
            <DollarSign className="mr-2 text-green-500" size={18} />
            Cost Efficiency
          </label>
          <select
            value={filters.costEfficiency}
            onChange={(e) => handleFilterChange('costEfficiency', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="budget">Budget</option>
            <option value="mid-range">Mid-range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        <div>
          <label className="flex items-center mb-2">
            <Coffee className="mr-2 text-brown-500" size={18} />
            Ambiance
          </label>
          <select
            value={filters.ambiance}
            onChange={(e) => handleFilterChange('ambiance', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="casual">Casual</option>
            <option value="romantic">Romantic</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div>
          <label className="flex items-center mb-2">
            <MapPin className="mr-2 text-red-500" size={18} />
            Max Distance (km)
          </label>
          <input
            type="number"
            min="0"
            max="50"
            value={filters.distance}
            onChange={(e) => handleFilterChange('distance', parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button
        onClick={onApplyFilters}
        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSection;