import React, { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AppointmentModal } from "@/components/AppointmentModal";

const A = "/assets/zenith/";

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 12h14m-5-5 5 5-5 5"} />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Our Approach", to: "/about" },
    { label: "Treatments", to: "/services" },
    { label: "Specialists", to: "/doctors" },
    { label: "Facilities", to: "/facilities" },
    { label: "Gallery", to: "/gallery" },
    { label: "Journal", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Zenith Dentistry Home">
          <img src={`${A}logo.png`} alt="Zenith Dentistry" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/" className={`nav-link-hover ${currentPath === "/" ? "font-bold text-[#304240]" : ""}`}>Home</Link>
          <Link to="/about" className={`nav-link-hover ${currentPath === "/about" ? "font-bold text-[#304240]" : ""}`}>Approach</Link>
          <Link to="/services" className={`nav-link-hover ${currentPath.startsWith("/services") ? "font-bold text-[#304240]" : ""}`}>Treatments</Link>
          <Link to="/doctors" className={`nav-link-hover ${currentPath === "/doctors" ? "font-bold text-[#304240]" : ""}`}>Specialists</Link>
          <Link to="/facilities" className={`nav-link-hover ${currentPath === "/facilities" ? "font-bold text-[#304240]" : ""}`}>Facilities</Link>
          <Link to="/gallery" className={`nav-link-hover ${currentPath === "/gallery" ? "font-bold text-[#304240]" : ""}`}>Gallery</Link>
          <Link to="/blog" className={`nav-link-hover ${currentPath.startsWith("/blog") ? "font-bold text-[#304240]" : ""}`}>Journal</Link>
          <Link to="/contact" className={`nav-link-hover ${currentPath === "/contact" ? "font-bold text-[#304240]" : ""}`}>Contact</Link>
        </nav>

        <button
          onClick={() => setBookingOpen(true)}
          className="header-cta btn-hover-lift cursor-pointer border-0"
        >
          Book a visit <Arrow />
        </button>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-links">
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to as any}
              onClick={() => setMenuOpen(false)}
            >
              <small>0{idx + 1}</small>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={() => {
              setMenuOpen(false);
              setBookingOpen(true);
            }}
            className="w-full py-4 bg-[#304240] text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-3"
          >
            Book an Appointment <Arrow />
          </button>
        </div>
        <div className="mobile-menu-foot">
          #55, Hospital Road, Dehiwala, Sri Lanka<br />
          011 272 7477 / 011 490 2655
        </div>
      </div>

      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
