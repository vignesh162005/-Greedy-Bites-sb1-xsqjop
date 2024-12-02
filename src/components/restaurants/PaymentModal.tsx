import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, CreditCard } from 'lucide-react';
import { Restaurant } from '../../types';
import { toast } from 'react-hot-toast';

interface Props {
  open: boolean;
  onClose: () => void;
  bookingDetails: {
    date: string;
    time: string;
    guests: number;
    selectedDishes: string[];
  };
  restaurant: Restaurant;
}

export function PaymentModal({ open, onClose, bookingDetails, restaurant }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<'gpay' | 'phonepe' | 'paytm'>('gpay');
  const bookingFee = 100; // Example booking fee

  const handlePayment = async () => {
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate sending notification to restaurant
      console.log('Sending notification to restaurant:', {
        restaurant: restaurant.name,
        booking: bookingDetails,
      });

      toast.success('Table booked successfully! Restaurant will contact you shortly.');
      onClose();
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-xl font-semibold text-gray-900 flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Confirm Booking
          </Dialog.Title>
          <Dialog.Close className="absolute top-4 right-4">
            <X className="w-5 h-5 text-gray-500" />
          </Dialog.Close>

          <div className="mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900">Booking Details</h4>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <p>Date: {bookingDetails.date}</p>
                <p>Time: {bookingDetails.time}</p>
                <p>Guests: {bookingDetails.guests}</p>
                {bookingDetails.selectedDishes.length > 0 && (
                  <p>Pre-ordered Dishes: {bookingDetails.selectedDishes.join(', ')}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-900">Payment Method</h4>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="gpay"
                    checked={paymentMethod === 'gpay'}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Google Pay</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="phonepe"
                    checked={paymentMethod === 'phonepe'}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>PhonePe</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="paytm"
                    checked={paymentMethod === 'paytm'}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Paytm</span>
                </label>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span>Booking Fee:</span>
                <span>₹{bookingFee}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Pay ₹{bookingFee}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}