import { Room, Dish, Review, FAQItem, GalleryItem } from './types';

// Let's reference our custom generated images
export const IMAGES = {
  heroBanner: '/src/assets/images/hotel_hero_banner_1783495172780.jpg',
  luxurySuite: '/src/assets/images/hotel_luxury_suite_1783495187395.jpg',
  gardenRestaurant: '/src/assets/images/garden_restaurant_1783495202871.jpg',
  weddingGarden: '/src/assets/images/wedding_garden_event_1783495217268.jpg',
};

export const HOTEL_DETAILS = {
  name: 'Manas Garden Hotel',
  tagline: 'Lush Green Luxury in the Heart of Nature',
  location: 'Burhanpur Road, Raver, Maharashtra 425508, India',
  phone: '+91 94227 75522',
  email: 'info@manasgardenhotel.com',
  whatsapp: '919422775522',
  gmapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.422616238382!2d76.03668357597148!3d21.363383380371404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8f1618a8047bf%3A0xc6cf6d427d141e6e!2sManas%20Garden%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  gmapLink: 'https://www.google.com/maps/place/Manas+Garden+Hotel,+Burhanpur+Rd,+Dist:,+Raver,+Maharashtra+425508/',
};

export const HERO_SLIDES = [
  {
    image: IMAGES.heroBanner,
    title: 'Manas Garden Hotel',
    subtitle: 'Raver\'s Premier Luxury Resort',
    description: 'A sanctuary of tranquility, where majestic green landscapes meet gold-standard hospitality. Experience bespoke living, exquisite dining, and unforgettable wedding celebrations.',
  },
  {
    image: IMAGES.weddingGarden,
    title: 'Your Dream Event, Magnified',
    subtitle: 'The Majestic Wedding Lawn',
    description: 'Bask in the glory of our expansive, meticulously designed grand lawns. Tailored for beautiful weddings, receptions, and premium corporate gatherings.',
  },
  {
    image: IMAGES.luxurySuite,
    title: 'Indulge in Premium Comfort',
    subtitle: 'Luxury Suites & Family Cottages',
    description: 'Wake up to the rustling of tropical leaves and birdsong. Fully equipped with premium materials, deep tubs, and personal garden terraces.',
  },
];

export const HIGHLIGHTS = [
  {
    icon: 'TreePine',
    title: 'Lush Botanical Gardens',
    description: 'Sprawling, professionally landscaped gardens displaying beautiful flora, peaceful fountains, and winding walking paths.'
  },
  {
    icon: 'Utensils',
    title: 'Multi-Cuisine Restaurant',
    description: 'A gourmet dining experience in an open-air glass pavilion serving authentic regional and global masterworks.'
  },
  {
    icon: 'Sparkles',
    title: 'Grand Wedding Lawns',
    description: 'Accommodating up to 2,000 guests with elegant lighting, majestic stage frameworks, and bespoke event catering.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Uncompromised Safety',
    description: '24/7 security, high-definition surveillance, spacious secure parking, and round-the-clock front desk assistance.'
  },
  {
    icon: 'Wifi',
    title: 'High-Speed Connectivity',
    description: 'Seamless premium Wi-Fi coverage across the entire resort campus, from your bed to the farthest garden gazebos.'
  },
  {
    icon: 'Clock',
    title: 'Premium Room Service',
    description: 'Dedicated personal service to cater to your desires, from breakfast in bed to midnight dining under the stars.'
  }
];

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-green',
    name: 'Deluxe Green-View Room',
    type: 'deluxe',
    description: 'A beautifully balanced sanctuary featuring elegant glass architectural elements, premium mahogany details, and sweeping views of our signature central flower beds.',
    price: 3200,
    size: '320 sq ft',
    capacity: '2 Adults, 1 Child',
    bed: 'King Size bed',
    view: 'Central Flower Gardens',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Air Conditioning', 'Free High-Speed Wi-Fi', 'Smart LED TV', 'Tea & Coffee Maker', 'Premium Toiletries', 'Private Balcony', 'Mini Fridge']
  },
  {
    id: 'luxury-garden',
    name: 'Luxury Garden Suite',
    type: 'luxury',
    description: 'Our signature room with floor-to-ceiling glass paneling, a private veranda looking into the botanical palm garden, and premium brass-trimmed fixtures.',
    price: 4800,
    size: '480 sq ft',
    capacity: '3 Adults or 2 Adults, 2 Children',
    bed: 'California King Bed',
    view: 'Botanical Palm Garden',
    image: IMAGES.luxurySuite,
    amenities: ['Air Conditioning', 'Free High-Speed Wi-Fi', '55" Ultra HD Smart TV', 'Espresso Coffee Machine', 'In-room Electronic Safe', 'Private Terrace with Lounge Chairs', 'Deep Bathtub & Premium Linens']
  },
  {
    id: 'emperor-presidential',
    name: 'Emperor Royal Suite',
    type: 'suite',
    description: 'The pinnacle of luxury at Manas Garden. Features a lavish living salon, direct pathway access to private gazebos, gold-leaf styling, and master bathroom suite.',
    price: 7500,
    size: '750 sq ft',
    capacity: '4 Adults',
    bed: 'Super King Bed + Premium Rollaway',
    view: 'Panoramic Resort & Mountains',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Personal Butler Service', 'Complimentary In-suite Dining', '65" OLED TV with Dolby Soundbar', 'Walk-in Wardrobe', 'Jacuzzi Spa Tub', 'Private Botanical Patio', 'Luxury Mini-Bar']
  }
];

export const DISHES_DATA: Dish[] = [
  {
    id: 'dish-1',
    name: 'Paneer Makhanwala Gold',
    category: 'mains',
    description: 'Fresh artisanal cottage cheese cubes simmered in a velvety, rich tomato-butter gravy garnished with 24k edible gold leaf flakes and fresh cream.',
    price: 340,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    tags: ['Best Seller', 'Vegetarian', 'Signature']
  },
  {
    id: 'dish-2',
    name: 'Manas Garden Special Platter',
    category: 'starters',
    description: 'An assortment of tandoor-roasted items: Paneer Tikka, Veg Seekh Kebab, Grilled Mushrooms, and Stuffed Potato skins, served with mint chutney.',
    price: 420,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Spicy', 'Tandoor Special']
  },
  {
    id: 'dish-3',
    name: 'Shahi Khurma Rabdi Pot',
    category: 'desserts',
    description: 'A royal regional dessert composed of slow-reduced thick sweetened milk, layered with toasted dry fruits and saffron-infused golden honey syrup.',
    price: 210,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
    tags: ['Royal', 'Sweet']
  },
  {
    id: 'dish-4',
    name: 'Burhanpur Mawa Jalebi',
    category: 'desserts',
    description: 'A deep, dark regional delicacy made with fresh reduced milk (mawa), fried to golden perfection, and soaked in cardamom-flavored sugar syrup.',
    price: 180,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    tags: ['Local Famous', 'Warm']
  },
  {
    id: 'dish-5',
    name: 'Imperial Mint Cooler',
    category: 'beverages',
    description: 'Fresh garden-picked mint muddled with fresh lime, organic sugar syrup, and zero-impurity carbonated club soda over crushed ice.',
    price: 150,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    tags: ['Refreshing', 'Organic']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Amit Patil',
    location: 'Jalgaon, MH',
    rating: 5,
    comment: 'We hosted my sister\'s wedding at the Manas Garden wedding lawn and it was an absolute dream. The lighting, decor, and the sheer scale of the green lawns was breath-taking. The catering was highly praised by all 1200 guests!',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-2',
    name: 'Dr. Priya Sharma',
    location: 'Indore, MP',
    rating: 5,
    comment: 'An exquisite forest getaway. The glassmorphism decor and gold lighting gives a very elegant boutique feel. The food at the garden restaurant was incredibly authentic, especially the regional Mawa Jalebi. Highly recommended for weekend stays.',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-3',
    name: 'Rajesh Chaudhari',
    location: 'Raver, MH',
    rating: 5,
    comment: 'Excellent service. The rooms are spotless, modern, and have amazing private verandas that look straight into botanical palm groves. Having high-speed internet in the middle of such a green property is a lifesaver.',
    date: 'April 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I reach Manas Garden Hotel?',
    answer: 'We are situated on the Burhanpur Road in Raver, Maharashtra. It is easily accessible by car or taxi. The nearest major railway junction is Bhusaval (approx. 45 mins drive), and Raver Railway Station is just 10 minutes away.'
  },
  {
    id: 'faq-2',
    question: 'What is the guest capacity of the Wedding Lawn?',
    answer: 'Our main grand wedding lawn can comfortably host up to 2,000 guests. We also have smaller manicured garden pockets for pre-wedding functions, haldi, mehendi, and corporate gatherings of 100 to 500 guests.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer catering services for events?',
    answer: 'Yes! We have an expert in-house culinary team that customizes exquisite vegetarian and non-vegetarian menus, with specialization in Maharashtrian, Mughlai, Chinese, and regional sweet delicacies (like Burhanpur Mawa Jalebi).'
  },
  {
    id: 'faq-4',
    question: 'What are the check-in and check-out timings?',
    answer: 'Our standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in or late check-out is subject to availability and can be requested at the time of booking.'
  },
  {
    id: 'faq-5',
    question: 'Is parking available on site?',
    answer: 'Yes, we have a safe, spacious, and dedicated private parking facility inside our secure gated campus that can easily accommodate over 150 vehicles, free of charge for staying guests and event attendees.'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'gal-1', category: 'resort', title: 'Main Grand Facade', image: IMAGES.heroBanner },
  { id: 'gal-2', category: 'rooms', title: 'Luxury Suite Bedroom', image: IMAGES.luxurySuite },
  { id: 'gal-3', category: 'restaurant', title: 'Garden Dining under Fairylights', image: IMAGES.gardenRestaurant },
  { id: 'gal-4', category: 'wedding', title: 'Grand Altar Setup', image: IMAGES.weddingGarden },
  { id: 'gal-5', category: 'garden', title: 'Botanical Palm Trees Walkway', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-6', category: 'rooms', title: 'Deluxe Room View', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-7', category: 'restaurant', title: 'Chef Signature Dish', image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-8', category: 'wedding', title: 'Banquet & Reception Table Styling', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80' },
];
