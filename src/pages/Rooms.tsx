import AnimatedSection from "../components/AnimatedSection";
import RoomCard from "../components/RoomCard";
import { rooms, images } from "../data/hotel";

const Rooms = () => (
  <main>
    {/* Hero banner */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.roomDeluxe}
          alt="Luxury suite"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>
      <div className="relative z-10 text-center px-6">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
          Accommodations
        </p>
        <h1 className="font-heading text-5xl md:text-6xl text-warm-white mb-4">
          Rooms & Suites
        </h1>
        <p className="text-warm-white/70 max-w-lg mx-auto">
          Discover our collection of thoughtfully designed rooms, each offering
          a unique experience of luxury and comfort.
        </p>
      </div>
    </section>

    <AnimatedSection>
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default Rooms;
