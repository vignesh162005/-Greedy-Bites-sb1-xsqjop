import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Calendar, Clock, Users, IndianRupee } from 'lucide-react';
import { Restaurant } from '../../types';
import { PaymentModal } from './PaymentModal';
import { useAuthStore } from '../../store/authStore';
import { sendWhatsAppNotification } from '../../utils/notifications';
import { toast } from 'react-hot-toast';

interface Props {
  restaurant: Restaurant;
  open: boolean;
  onClose: () => void;
}

export function TableBooking({ restaurant, open, onClose }: Props) {
  const [showPayment, setShowPayment] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    guests: 1,
    selectedDishes: [] as string[],
  });

  const user = useAuthStore((state) => state.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please log in to book a table');
      return;
    }

    try {
      // Send WhatsApp notification to restaurant
      await sendWhatsAppNotification({
        restaurantId: restaurant.id,
        restaurantPhone: restaurant.phone,
        customerName: user.name,
        date: bookingDetails.date,
        time: bookingDetails.time,
        guests: bookingDetails.guests,
        selectedDishes: bookingDetails.selectedDishes,
      });

      setShowPayment(true);
    } catch (error) {
      toast.error('Failed to process booking request');
    }
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              Book a Table at {restaurant.name}
            </Dialog.Title>
            <Dialog.Close className="absolute top-4 right-4">
              <X className="w-5 h-5 text-gray-500" />
            </Dialog.Close>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="w-4 h-4 inline-block mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={bookingDetails.date}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Clock className="w-4 h-4 inline-block mr-2" />
                  Time
                </label>
                <input
                  type="time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={bookingDetails.time}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, time: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Users className="w-4 h-4 inline-block mr-2" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max={restaurant.capacity.max}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={bookingDetails.guests}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, guests: parseInt(e.target.value) })}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Maximum capacity: {restaurant.capacity.max} guests
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pre-order Dishes (Optional)
                </label>
                <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
                  {restaurant.menu.map((item) => (
                    <label key={item.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(e) => {
                          const dishes = e.target.checked
                            ? [...bookingDetails.selectedDishes, item.name]
                            : bookingDetails.selectedDishes.filter((d) => d !== item.name);
                          setBookingDetails({ ...bookingDetails, selectedDishes: dishes });
                        }}
                      />
                      <span>{item.name}</span>
                      <span className="text-gray-500 text-sm">
                        <IndianRupee className="w-3 h-3 inline-block" />
                        {item.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Proceed to Payment
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <PaymentModal
        open={showPayment}
        onClose={() => {
          setShowPayment(false);
          onClose();
        }}
        bookingDetails={bookingDetails}
        restaurant={restaurant}
      />
    </>
  );
}