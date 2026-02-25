import AnimatedSection from "../components/AnimatedSection";
import { images, teamMembers } from "../data/hotel";

const About = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hotelExterior}
          alt="Aurora Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>
      <div className="relative z-10 text-center px-6">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
          Our Story
        </p>
        <h1 className="font-heading text-5xl md:text-6xl text-warm-white mb-4">
          About Aurora
        </h1>
        <p className="text-warm-white/70 max-w-lg mx-auto">
          A tale of passion, heritage, and the relentless pursuit of perfection.
        </p>
      </div>
    </section>

    {/* Story */}
    <AnimatedSection>
      <div className="container-luxury max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
          Est. 1892
        </p>
        <h2 className="font-heading text-3xl md:text-4xl mb-6">
          A Legacy Reimagined
        </h2>
        <div className="gold-divider mb-8" />
        <p className="text-muted-foreground leading-relaxed mb-6">
          Originally built in 1892 as a private residence for a Belgian
          diplomat, the Aurora has been lovingly restored and reimagined as a
          boutique hotel that honors its storied past while embracing modern
          luxury. Every arch, every cornice, every hand-laid tile tells a story
          spanning more than a century.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          In 2018, the Fontaine family — fifth-generation hoteliers — undertook
          a meticulous two-year renovation, bringing Scandinavian minimalism
          into dialogue with Belle Époque grandeur. The result is a hotel that
          feels both timeless and refreshingly contemporary, a place where
          history breathes alongside innovation.
        </p>
      </div>
    </AnimatedSection>

    {/* Image Break */}
    <AnimatedSection className="!py-0">
      <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={images.spaPool}
          alt="Spa"
          className="w-full h-80 object-cover rounded-luxury"
          loading="lazy"
        />
        <img
          src={images.restaurant}
          alt="Restaurant"
          className="w-full h-80 object-cover rounded-luxury"
          loading="lazy"
        />
      </div>
    </AnimatedSection>

    {/* Mission */}
    <AnimatedSection>
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Our Mission
          </p>
          <h2 className="font-heading text-3xl mb-6">
            Crafting Unforgettable Moments
          </h2>
          <div className="gold-divider !mx-0 mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            We believe that true luxury lies not in ostentation, but in the
            quiet perfection of every detail. Our mission is to create a
            sanctuary where guests feel genuinely cared for — where warmth,
            beauty, and attentiveness converge to create memories that last a
            lifetime.
          </p>
        </div>
        <div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Our Vision
          </p>
          <h2 className="font-heading text-3xl mb-6">
            The Future of Boutique Hospitality
          </h2>
          <div className="gold-divider !mx-0 mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            To be recognized as Europe's most beloved boutique hotel — not the
            largest, not the most extravagant, but the one guests return to year
            after year, the one they recommend to their dearest friends, the one
            that feels like a second home.
          </p>
        </div>
      </div>
    </AnimatedSection>

    {/* Team */}
    <AnimatedSection className="bg-secondary/50">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Our People
          </p>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Meet the Team
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass-card p-8 text-center rounded-luxury"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-xl text-primary">
                  {member.avatar}
                </span>
              </div>
              <h3 className="font-heading text-lg mb-1">{member.name}</h3>
              <p className="text-primary text-xs tracking-widest uppercase mb-4">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default About;
