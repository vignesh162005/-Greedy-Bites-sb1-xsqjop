import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Vignesh Restaurant',
    type: 'veg',
    phone: '7013333039',
    capacity: {
      max: 50,
      current: 15,
    },
    location: {
      address: 'Plot No. 123, Jubilee Hills, Hyderabad, Telangana 500033',
      coordinates: {
        lat: 17.4319,
        lng: 78.4095,
      },
    },
    rating: 4.5,
    reviews: [
      {
        id: '1',
        userId: '1',
        rating: 5,
        comment: 'Best South Indian vegetarian food in Hyderabad!',
        date: '2024-03-15',
      },
      {
        id: '2',
        userId: '2',
        rating: 4,
        comment: 'Great ambiance and authentic flavors',
        date: '2024-03-10',
      },
    ],
    menu: [
      {
        id: '1',
        name: 'Masala Dosa',
        price: 120,
        type: 'veg',
        description: 'Crispy dosa with spicy potato filling',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
      },
      {
        id: '2',
        name: 'Paneer Butter Masala',
        price: 220,
        type: 'veg',
        description: 'Rich and creamy paneer curry',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
      },
      {
        id: '3',
        name: 'Mysore Bonda',
        price: 80,
        type: 'veg',
        description: 'Deep-fried spiced potato balls',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
      },
    ],
    famousDishes: ['Masala Dosa', 'Paneer Butter Masala', 'Mysore Bonda'],
  },
  {
    id: '2',
    name: 'Yaswanth Restaurant',
    type: 'non-veg',
    phone: '9182575228',
    capacity: {
      max: 30,
      current: 12,
    },
    location: {
      address: '456 Road No. 1, Banjara Hills, Hyderabad, Telangana 500034',
      coordinates: {
        lat: 17.4156,
        lng: 78.4347,
      },
    },
    rating: 4.3,
    reviews: [
      {
        id: '1',
        userId: '1',
        rating: 4,
        comment: 'Amazing biryani and kebabs!',
        date: '2024-03-12',
      },
    ],
    menu: [
      {
        id: '1',
        name: 'Hyderabadi Biryani',
        price: 300,
        type: 'non-veg',
        description: 'Authentic Hyderabadi style chicken biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      },
      {
        id: '2',
        name: 'Butter Chicken',
        price: 280,
        type: 'non-veg',
        description: 'Creamy tomato-based chicken curry',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
      },
    ],
    famousDishes: ['Hyderabadi Biryani', 'Butter Chicken', 'Mutton Rogan Josh'],
  },
  {
    id: '3',
    name: 'Shashi Restaurant',
    type: 'both',
    phone: '9912459683',
    capacity: {
      max: 20,
      current: 4,
    },
    location: {
      address: '789 Gachibowli Main Road, Hyderabad, Telangana 500032',
      coordinates: {
        lat: 17.4400,
        lng: 78.3489,
      },
    },
    rating: 4.2,
    reviews: [
      {
        id: '1',
        userId: '1',
        rating: 4,
        comment: 'Great variety of both veg and non-veg options',
        date: '2024-03-14',
      },
    ],
    menu: [
      {
        id: '1',
        name: 'Veg Pulao',
        price: 180,
        type: 'veg',
        description: 'Fragrant rice with mixed vegetables',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b',
      },
      {
        id: '2',
        name: 'Chicken Tikka',
        price: 250,
        type: 'non-veg',
        description: 'Grilled marinated chicken pieces',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0',
      },
    ],
    famousDishes: ['Veg Pulao', 'Chicken Tikka', 'Mixed Grill Platter'],
  },
];