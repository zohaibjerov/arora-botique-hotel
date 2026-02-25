import { Link } from "react-router-dom";
import type { Room } from "@/data/hotel";
import { Users, Maximize } from "lucide-react";

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

const RoomCard = ({ room, featured }: RoomCardProps) => (
  <div
    className={`group bg-card rounded-luxury overflow-hidden luxury-shadow transition-all duration-500 hover:luxury-shadow-hover hover:-translate-y-1 ${
      featured ? "lg:col-span-1" : ""
    }`}
  >
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
        <span className="text-sm font-body font-semibold text-foreground">
          €{room.price}
          <span className="text-muted-foreground font-normal">/night</span>
        </span>
      </div>
    </div>

    <div className="p-6 md:p-8">
      <h3 className="font-heading text-xl mb-2">{room.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {room.description}
      </p>

      <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Maximize size={14} className="text-primary" />
          {room.size}
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={14} className="text-primary" />
          Up to {room.guests}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {room.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
          >
            {f}
          </span>
        ))}
        {room.features.length > 3 && (
          <span className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
            +{room.features.length - 3} more
          </span>
        )}
      </div>

      <Link
        to="/contact"
        className="inline-block w-full text-center px-6 py-3 border border-primary text-primary text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        Book Now
      </Link>
    </div>
  </div>
);

export default RoomCard;
