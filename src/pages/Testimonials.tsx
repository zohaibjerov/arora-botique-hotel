import AnimatedSection from "../components/AnimatedSection";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/hotel";

const Testimonials = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="relative z-10 text-center px-6">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
          Guest Experiences
        </p>
        <h1 className="font-heading text-5xl md:text-6xl text-warm-white mb-4">
          Testimonials
        </h1>
        <p className="text-warm-white/70 max-w-lg mx-auto">
          Hear from our cherished guests about their Aurora experience.
        </p>
      </div>
    </section>

    <AnimatedSection>
      <div className="container-luxury">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t) => (
            <div key={t.id} className="break-inside-avoid">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default Testimonials;
