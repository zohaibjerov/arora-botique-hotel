import { Star } from "lucide-react";
import type { Testimonial } from "@/data/hotel";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="glass-card p-8 rounded-luxury transition-all duration-500 hover:luxury-shadow-hover">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-primary text-primary"
        />
      ))}
    </div>

    <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
      "{testimonial.text}"
    </p>

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-xs font-semibold text-primary">
          {testimonial.avatar}
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
