import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-cream/80 section-padding">
    <div className="container-luxury">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl text-cream mb-4">Aurora</h3>
          <p className="text-sm leading-relaxed text-cream/60">
            Where Elegance Meets Comfort. A luxury boutique hotel offering
            timeless European hospitality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg text-cream mb-4">Explore</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: "Home", path: "/" },
              { name: "Rooms & Suites", path: "/rooms" },
              { name: "About Us", path: "/about" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-cream/60 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg text-cream mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-cream/60">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>Rue de la Paix 42, 1000 Brussels, Belgium</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <span>+32 2 555 0100</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <span>hello@aurorahotel.com</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading text-lg text-cream mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-cream/60 hover:text-primary transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 pt-8 text-center">
        <p className="text-xs text-cream/40 tracking-wider">
          © 2026 Aurora Boutique Hotel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
