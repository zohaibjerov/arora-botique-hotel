import { Link } from "react-router-dom";
import {
  Wifi,
  Waves,
  Droplets,
  Car,
  UtensilsCrossed,
  Star,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import RoomCard from "../components/RoomCard";
import TestimonialCard from "../components/TestimonialCard";
import { images, rooms, testimonials } from "../data/hotel";

const amenities = [
  { icon: Wifi, label: "Free WiFi", desc: "High-speed throughout" },
  { icon: Waves, label: "Luxury Spa", desc: "World-class treatments" },
  { icon: Droplets, label: "Private Pool", desc: "Heated indoor pool" },
  { icon: Car, label: "Airport Pickup", desc: "Complimentary transfer" },
  { icon: UtensilsCrossed, label: "Fine Dining", desc: "Michelin-inspired" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.heroRoom}
            alt="Aurora Boutique Hotel luxury room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up font-body">
            Where Elegance Meets Comfort
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-warm-white mb-8 animate-fade-up-delay-1 leading-tight">
            Aurora
            <br />
            <span className="italic font-normal">Boutique Hotel</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
            <Link
              to="/contact"
              className="px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-gold-dark"
            >
              Book Now
            </Link>
            <Link
              to="/rooms"
              className="px-10 py-4 border border-warm-white/40 text-warm-white text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-warm-white/10"
            >
              Explore Rooms
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-warm-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <AnimatedSection>
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-luxury">
            <img
              src={images.hotelExterior}
              alt="Aurora Hotel exterior"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="italic">European Elegance</span>
            </h2>
            <div className="gold-divider !mx-0 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nestled in the heart of Brussels, Aurora Boutique Hotel is a
              sanctuary of refined luxury. Originally a 19th-century mansion,
              our hotel blends historic grandeur with contemporary Scandinavian
              design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every detail — from the handpicked artwork to the artisan
              furnishings — has been curated to create an atmosphere of warmth,
              beauty, and timeless sophistication.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Rooms Preview */}
      <AnimatedSection className="bg-secondary/50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Accommodations
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Rooms & Suites
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              Each room is a masterpiece of comfort and design, offering an
              intimate retreat in the heart of the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block px-10 py-3 border border-primary text-primary text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Amenities */}
      <AnimatedSection>
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Premium Amenities
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {amenities.map((a) => (
              <div key={a.label} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <a.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm mb-1">{a.label}</h3>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Preview */}
      <AnimatedSection className="bg-secondary/50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Guest Experiences
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              What Our Guests Say
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.spaPool}
            alt="Aurora spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">
            Your Journey Awaits
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-warm-white mb-8 leading-tight">
            Experience Luxury
            <br />
            <span className="italic font-normal">Today</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-gold-dark"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
