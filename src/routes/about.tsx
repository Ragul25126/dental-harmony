import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZENITH_CONTACT, DOCTORS_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-[7vw] bg-[#304240] text-white overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <p className="eyebrow light">Zenith Dentistry · Dehiwala, Sri Lanka</p>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none mt-6 mb-8 font-normal">
            Care for people.<br />
            <em className="font-light italic">Not just teeth.</em>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            For over 16 years, Zenith Dentistry has redefined dental care in Colombo. Our clinic couples hospital-grade clinical precision with a tranquil, spa-like environment.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-pad">
        <div className="section-index">01 / Our Story & Philosophy</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl max-h-[500px]">
            <img src={`${A}about.webp`} alt="Zenith Dentistry Interior" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-tight">
              A gentle approach to modern dentistry.
            </h2>
            <p className="text-[#405956] font-serif text-xl sm:text-2xl leading-snug">
              We understand that visiting the dentist can bring anxiety. That’s why every corner of our clinic was designed to inspire calm.
            </p>
            <p className="text-[#657673] text-sm leading-relaxed">
              From routine preventive check-ups to comprehensive full-mouth restorations and Invisalign clear aligners, our team combines advanced digital diagnostics with warm, personal attention.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#193331]/20">
              <div>
                <b className="font-serif text-4xl font-normal block text-[#304240]">16+</b>
                <span className="text-xs text-[#687a77]">Years of clinical excellence</span>
              </div>
              <div>
                <b className="font-serif text-4xl font-normal block text-[#304240]">ISO 9001</b>
                <span className="text-xs text-[#687a77]">Certified quality standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#304240] text-white section-pad">
        <div className="section-index light-index">02 / Founder & Lead Dentist</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#709b9d] font-bold">Founder Profile</span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal mt-2 mb-6">
              {DOCTORS_DATA[0].name}
            </h2>
            <p className="text-sm font-semibold text-white/90 mb-4">{DOCTORS_DATA[0].designation}</p>
            <p className="text-sm text-white/80 leading-relaxed mb-6">{DOCTORS_DATA[0].bio}</p>
            <div className="space-y-2 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#709b9d]">Qualifications & Certifications:</p>
              <ul className="list-disc list-inside text-xs text-white/80 space-y-1">
                {DOCTORS_DATA[0].qualifications.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="pill light-pill border-0 cursor-pointer bg-transparent"
            >
              Consult Dr. Fouzan <Arrow />
            </button>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[480px]">
            <img src={`${A}doctor.webp`} alt={DOCTORS_DATA[0].name} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="section-index">03 / Core Values</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 bg-[#f6f6f1] rounded-3xl space-y-3">
            <span className="text-2xl font-bold text-[#709b9d]">01</span>
            <h3 className="font-serif text-2xl font-medium">No-Pain Philosophy</h3>
            <p className="text-xs text-[#667774] leading-relaxed">
              We employ ultra-gentle local anesthesia techniques and digital technology to ensure treatment is virtually pain-free.
            </p>
          </div>
          <div className="p-8 bg-[#f6f6f1] rounded-3xl space-y-3">
            <span className="text-2xl font-bold text-[#709b9d]">02</span>
            <h3 className="font-serif text-2xl font-medium">Digital Precision</h3>
            <p className="text-xs text-[#667774] leading-relaxed">
              In-house 3D digital scanners and digital radiography deliver maximum accuracy with minimal discomfort and low radiation.
            </p>
          </div>
          <div className="p-8 bg-[#f6f6f1] rounded-3xl space-y-3">
            <span className="text-2xl font-bold text-[#709b9d]">03</span>
            <h3 className="font-serif text-2xl font-medium">Transparent Care</h3>
            <p className="text-xs text-[#667774] leading-relaxed">
              Clear treatment plans, honest consultation, and zero hidden fees so you are always fully informed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
