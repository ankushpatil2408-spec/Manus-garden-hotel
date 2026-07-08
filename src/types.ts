export interface Room {
  id: string;
  name: string;
  type: 'deluxe' | 'luxury' | 'suite';
  description: string;
  price: number;
  size: string;
  capacity: string;
  bed: string;
  view: string;
  image: string;
  amenities: string[];
}

export interface Dish {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'desserts' | 'beverages';
  description: string;
  price: number;
  rating: number;
  image: string;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'rooms' | 'restaurant' | 'garden' | 'wedding' | 'resort';
  title: string;
  image: string;
}
