import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';
import { Restaurant } from '../../types';

interface Props {
  restaurant: Restaurant;
  onClick: () => void;
}

export function RestaurantCard({ restaurant, onClick }: Props) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
        <div className="mt-2 flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-gray-600">{restaurant.rating}</span>
          <span className="text-gray-400">|</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            restaurant.type === 'veg' 
              ? 'bg-green-100 text-green-800' 
              : restaurant.type === 'non-veg'
              ? 'bg-red-100 text-red-800'
              : 'bg-purple-100 text-purple-800'
          }`}>
            {restaurant.type === 'both' ? 'Veg & Non-veg' : restaurant.type}
          </span>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{restaurant.location.address}</span>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">Capacity: {restaurant.capacity.current}/{restaurant.capacity.max}</span>
        </div>
      </div>
    </div>
  );
}