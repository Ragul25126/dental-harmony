import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ZENITH_CONTACT } from "@/lib/zenith-data";
import { AppointmentModal } from "@/components/AppointmentModal";

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.876-9.874 2.636 0 5.115 1.028 6.974 2.889a9.81 9.81 0 012.879 6.985c.001 5.446-4.428 9.876-9.875 9.876m0-18.067C6.065 3.718 1.488 8.294 1.488 13.926c0 2.1.547 4.148 1.587 5.952L1.6 23.364l3.585-.941a12.18 12.18 0 005.856 1.498h.005c5.632 0 10.21-4.576 10.21-10.208 0-2.727-1.062-5.291-2.992-7.222A10.15 10.15 0 0012.051 3.718" />
    </svg>
  );
}

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Footer() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-callout">
          <p className="eyebrow light">Ready when you are</p>
          <h2>
            Let’s make your next<br />
            visit feel <em>different.</em>
          </h2>
          <button
            onClick={() => setBookingOpen(true)}
            className="pill light-pill btn-hover-lift cursor-pointer border-0 bg-transparent"
          >
            Book an appointment <Arrow />
          </button>
        </div>

        <div className="footer-grid">
          <div>
            <img src={`${A}logo.png`} alt="Zenith Dentistry" />
            <p className="mt-3 text-[#b0c4c1] text-xs max-w-[220px]">
              Full-service dental clinic combining clinical precision with a serene atmosphere.
            </p>
            <div className="mt-5 flex flex-row items-center gap-3">
              <a
                href={ZENITH_CONTACT.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-10 h-10 shrink-0 rounded-full bg-[#243936] hover:bg-[#34524e] border border-[#324f4b] hover:border-[#4d726d] text-[#c2d6d3] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm group"
              >
                <FacebookIcon className="w-[18px] h-[18px] fill-current transition-transform duration-200 group-hover:scale-110" />
              </a>
              <a
                href={ZENITH_CONTACT.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="w-10 h-10 shrink-0 rounded-full bg-[#243936] hover:bg-[#34524e] border border-[#324f4b] hover:border-[#4d726d] text-[#c2d6d3] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm group"
              >
                <YouTubeIcon className="w-[18px] h-[18px] fill-current transition-transform duration-200 group-hover:scale-110" />
              </a>
              <a
                href={ZENITH_CONTACT.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10 h-10 shrink-0 rounded-full bg-[#243936] hover:bg-[#34524e] border border-[#324f4b] hover:border-[#4d726d] text-[#c2d6d3] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm group"
              >
                <InstagramIcon className="w-[18px] h-[18px] stroke-current transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>

          <div>
            <small>Visit Us</small>
            <p>
              {ZENITH_CONTACT.addressLine1}<br />
              {ZENITH_CONTACT.addressLine2}
            </p>
            <Link to="/contact" className="underline text-xs text-[#709b9d] mt-2 inline-block">
              View Map & Hours &rarr;
            </Link>
          </div>

          <div>
            <small>Contact</small>
            {ZENITH_CONTACT.phones.map((phone, idx) => (
              <a key={phone} href={`tel:${phone}`}>
                {ZENITH_CONTACT.displayPhones[idx]}
              </a>
            ))}
            <a href={`mailto:${ZENITH_CONTACT.email}`}>{ZENITH_CONTACT.email}</a>
            <a href={ZENITH_CONTACT.socials.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp: {ZENITH_CONTACT.displayWhatsapp}
            </a>
          </div>

          <div>
            <small>Quick Links</small>
            <a href="/#home">Home</a>
            <a href="/#services">Treatments</a>
            <a href="/#team">Doctors</a>
            <Link to="/facilities">Our Facility</Link>
            <a href="/#testimonials">Reviews</a>
            <a href="/#about">About Us</a>
            <a href="/#contact-us">Contact Us</a>
          </div>
        </div>

        <div className="copyright">
          <span>© {new Date().getFullYear()} Zenith Dentistry. All rights reserved.</span>
          <span>{ZENITH_CONTACT.tagline}</span>
        </div>
      </footer>

      {/* Floating contact buttons (fixed to viewport bottom-right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end pointer-events-auto">
        <a
          href={ZENITH_CONTACT.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Chat"
          title="WhatsApp Chat"
          className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <WhatsAppIcon className="w-7 h-7 fill-current" />
        </a>
        <a
          href="tel:0112727477"
          aria-label="Call 011-2727477"
          title="Call 011-2727477"
          className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#193331] hover:bg-[#284c49] text-white flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <PhoneIcon className="w-6 h-6 stroke-current fill-none" />
        </a>
      </div>

      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
