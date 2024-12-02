export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  gender: string;
  nationality: string;
  state: string;
  city: string;
  username: string;
}

export interface Restaurant {
  id: string;
  name: string;
  type: 'veg' | 'non-veg' | 'both';
  phone: string;
  capacity: {
    max: number;
    current: number;
  };
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  reviews: Review[];
  menu: MenuItem[];
  famousDishes: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  type: 'veg' | 'non-veg';
  description: string;
  image: string;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}