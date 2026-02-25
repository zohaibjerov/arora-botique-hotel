import heroRoom from "@/assets/hero-room.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import spaPool from "@/assets/spa-pool.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";
import restaurant from "@/assets/restaurant.jpg";
import roomClassic from "@/assets/room-classic.jpg";
import roomGarden from "@/assets/room-garden.jpg";

export const images = {
  heroRoom,
  hotelExterior,
  spaPool,
  roomDeluxe,
  roomPenthouse,
  restaurant,
  roomClassic,
  roomGarden,
};

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  size: string;
  guests: number;
}

export const rooms: Room[] = [
  {
    id: "classic",
    name: "Classic Room",
    description:
      "A cozy retreat with vintage European charm, premium bedding, and warm ambient lighting.",
    price: 280,
    image: roomClassic,
    features: ["King Bed", "City View", "Rain Shower", "Mini Bar"],
    size: "32 m²",
    guests: 2,
  },
  {
    id: "superior",
    name: "Superior Room",
    description:
      "Elegantly appointed with modern amenities and stunning views of the surrounding landscape.",
    price: 380,
    image: heroRoom,
    features: ["King Bed", "Balcony", "Bathtub", "Workspace", "Mini Bar"],
    size: "40 m²",
    guests: 2,
  },
  {
    id: "deluxe",
    name: "Deluxe Suite",
    description:
      "Spacious luxury with a separate sitting area, chandelier, and panoramic countryside views.",
    price: 520,
    image: roomDeluxe,
    features: [
      "King Bed",
      "Living Area",
      "Chandelier",
      "Butler Service",
      "Bathtub",
    ],
    size: "55 m²",
    guests: 3,
  },
  {
    id: "garden",
    name: "Garden Suite",
    description:
      "A serene escape with a private terrace overlooking manicured Mediterranean gardens.",
    price: 620,
    image: roomGarden,
    features: [
      "King Bed",
      "Private Terrace",
      "Garden View",
      "Living Area",
      "Fireplace",
    ],
    size: "65 m²",
    guests: 2,
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    description:
      "The pinnacle of luxury with panoramic windows, marble bath, and exclusive penthouse amenities.",
    price: 950,
    image: roomPenthouse,
    features: [
      "King Bed",
      "Panoramic View",
      "Marble Bathroom",
      "Private Bar",
      "Jacuzzi",
    ],
    size: "85 m²",
    guests: 4,
  },
  {
    id: "royal",
    name: "Royal Suite",
    description:
      "Our finest accommodation with bespoke furnishings, personal concierge, and the ultimate luxury.",
    price: 1400,
    image: restaurant,
    features: [
      "Super King Bed",
      "Private Dining",
      "Sauna",
      "Personal Concierge",
      "Terrace",
    ],
    size: "120 m²",
    guests: 4,
  },
];

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Rossi",
    location: "Milan, Italy",
    text: "An absolutely enchanting experience. The attention to detail is extraordinary — from the fresh flowers in every room to the personalized welcome letter. Truly unforgettable.",
    rating: 5,
    avatar: "IR",
  },
  {
    id: 2,
    name: "Alexander Müller",
    location: "Zurich, Switzerland",
    text: "We've stayed at many luxury hotels across Europe, but Aurora stands apart. The warmth of the staff and the elegance of the property create a perfect harmony.",
    rating: 5,
    avatar: "AM",
  },
  {
    id: 3,
    name: "Charlotte Dubois",
    location: "Paris, France",
    text: "The spa experience alone is worth the visit. Combined with the exquisite dining and impeccable rooms, this is European hospitality at its finest.",
    rating: 5,
    avatar: "CD",
  },
  {
    id: 4,
    name: "James Whitmore",
    location: "London, UK",
    text: "From the moment we arrived, we felt like royalty. The penthouse suite exceeded every expectation. A true gem of a hotel.",
    rating: 5,
    avatar: "JW",
  },
  {
    id: 5,
    name: "Sofia Lindqvist",
    location: "Stockholm, Sweden",
    text: "The Scandinavian-inspired design perfectly blends with classic European luxury. Every corner of this hotel tells a story of refined taste.",
    rating: 5,
    avatar: "SL",
  },
  {
    id: 6,
    name: "Marco Bianchi",
    location: "Rome, Italy",
    text: "The restaurant alone deserves a Michelin star. Paired with the most comfortable bed I've ever slept in, Aurora is pure perfection.",
    rating: 5,
    avatar: "MB",
  },
];

export const teamMembers = [
  {
    name: "Élise Fontaine",
    role: "General Manager",
    bio: "With over 20 years in luxury hospitality across Europe, Élise brings a passion for creating extraordinary guest experiences.",
    avatar: "EF",
  },
  {
    name: "Henrik Svensson",
    role: "Head Chef",
    bio: "Trained in Paris and Copenhagen, Henrik crafts menus that celebrate local ingredients with Scandinavian precision.",
    avatar: "HS",
  },
  {
    name: "Lucia Moretti",
    role: "Spa Director",
    bio: "Lucia designs our wellness programs drawing from ancient Mediterranean traditions and modern therapeutic practices.",
    avatar: "LM",
  },
];
