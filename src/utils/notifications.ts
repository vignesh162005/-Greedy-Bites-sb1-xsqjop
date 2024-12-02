interface BookingNotification {
  restaurantId: string;
  restaurantPhone: string;
  customerName: string;
  date: string;
  time: string;
  guests: number;
  selectedDishes: string[];
}

export async function sendWhatsAppNotification(notification: BookingNotification) {
  // In a real application, this would integrate with WhatsApp Business API
  // For demo purposes, we'll log the notification
  console.log('WhatsApp Notification:', {
    to: notification.restaurantPhone,
    message: `
New booking request:
Restaurant: ${notification.restaurantId}
Customer: ${notification.customerName}
Date: ${notification.date}
Time: ${notification.time}
Guests: ${notification.guests}
Selected Dishes: ${notification.selectedDishes.join(', ')}
    `.trim(),
  });

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
}