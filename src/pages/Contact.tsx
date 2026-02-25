import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="relative z-10 text-center px-6">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-warm-white mb-4">
            Contact Us
          </h1>
          <p className="text-warm-white/70 max-w-lg mx-auto">
            We'd love to hear from you. Reach out to plan your perfect stay.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-heading text-3xl mb-6">Send a Message</h2>
            <div className="gold-divider !mx-0 mb-8" />

            {submitted ? (
              <div className="glass-card p-12 rounded-luxury text-center">
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                  Thank You
                </p>
                <h3 className="font-heading text-2xl mb-4">Message Received</h3>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-4 bg-card border border-border rounded-luxury text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-card border border-border rounded-luxury text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-card border border-border rounded-luxury text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Tell us about your dream stay..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-gold-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="font-heading text-3xl mb-6">Hotel Information</h2>
            <div className="gold-divider !mx-0 mb-8" />

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Rue de la Paix 42, 1000 Brussels, Belgium
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    +32 2 555 0100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    hello@aurorahotel.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-luxury overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6856!2d4.3517!3d50.8503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUxJzAxLjEiTiA0wrAyMScwNi4xIkU!5e0!3m2!1sen!2sbe!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurora Hotel Location"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/3225550100"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-8 py-3 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-[hsl(142,70%,38%)]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Contact;
