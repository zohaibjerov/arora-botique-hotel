import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const showBg = isScrolled || !isHome || isMobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury flex items-center justify-between px-6 md:px-12 lg:px-20 h-20">
        <Link to="/" className="font-heading text-2xl tracking-wider">
          <span className={showBg ? "text-foreground" : "text-warm-white"}>
            Aurora
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : showBg
                  ? "text-foreground/70"
                  : "text-warm-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-luxury transition-all duration-300 hover:bg-gold-dark"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden transition-colors ${
            showBg ? "text-foreground" : "text-warm-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 animate-fade-up">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="w-full text-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-luxury"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
