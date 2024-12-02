import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { MapPin, Star, Users, Phone, Clock, IndianRupee } from 'lucide-react';
import { Restaurant } from '../../types';
import { TableBooking } from './TableBooking';
import { format } from 'date-fns';

interface Props {
  restaurant: Restaurant;
}

export function RestaurantDetails({ restaurant }: Props) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{restaurant.name}</h2>
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
          </div>
          <button
            onClick={() => setShowBooking(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Book a Table
          </button>
        </div>

        <div className="mt-4 space-y-2 text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{restaurant.location.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <span>{restaurant.phone}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span>Seating Capacity: {restaurant.capacity.current}/{restaurant.capacity.max}</span>
          </div>
        </div>

        <Tabs.Root className="mt-6" defaultValue="menu">
          <Tabs.List className="flex border-b border-gray-200">
            <Tabs.Trigger
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
              value="menu"
            >
              Menu
            </Tabs.Trigger>
            <Tabs.Trigger
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
              value="reviews"
            >
              Reviews
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="menu" className="pt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Famous Dishes</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.famousDishes.map((dish) => (
                  <span key={dish} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    {dish}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {restaurant.menu.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="w-4 h-4 text-gray-600" />
                      <span className="font-medium">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="reviews" className="pt-4">
            <div className="space-y-4">
              {restaurant.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {format(new Date(review.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <TableBooking
        restaurant={restaurant}
        open={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </div>
  );
}